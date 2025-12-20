---
title: Drafft Multiuser Feature
description: Realtime multi user scripting and dialogue trees, with replication to a remote database.
caption: Multi user feature
---

# Multi-user (Remote replication)

With the power of [Apache CouchDB](https://couchdb.apache.org/), Drafft supports realtime multiuser sync to a remote database.

Every time a user make a change it will sync the changes to the remote server. Now each client will poll this server for changes in “Remote sync interval” seconds, merging the changes on their local database.

That’s why the lock/unlock mechanism was added. We can replicate in real-time, but with the condition that no 2 users are modifying the same item to prevent conflicts and data loss.

## Requirements

- A [couchdb](https://couchdb.apache.org/) server, with admin permissions. A dedicated server for drafft is recommended. The easiest way to get it running is using the [official docker image](https://hub.docker.com/_/couchdb/)
- Connectivity of each computer to the server.
- Each user should have a distinctive username
- Each user should enable the remote sync feature in the project settings, and input the server url and database name.

## Setting up a Remote CouchDB Server for Drafft

Drafft supports remote synchronization with a CouchDB-compatible server. This guide walks you through deploying CouchDB using Docker, enabling CORS for browser access, and preparing your server for integration with Drafft.

To deploy CouchDB using Docker, follow these steps:

### Step 1: Deploy CouchDB with Docker

Create a file named docker-compose.yml:

```yml
services:
  couchdb:
    image: couchdb:latest
    container_name: drafft-couchdb
    restart: unless-stopped
    ports:
      - "5984:5984" # (Optional) Expose CouchDB on port 5984
    environment:
      - COUCHDB_USER=admin
      - COUCHDB_PASSWORD=secret_please_change
    volumes:
      - couchdb-data:/opt/couchdb/data

volumes:
  couchdb-data:

# Optional: Connect to the proxy network Instead of exposing ports
networks:
  default:
    name: proxy-net
    external: true
```

:::tip
💡 Drafft recommends using a Docker volume for persistence. For advanced users, a bind mount may be used to access the database files directly.
:::

Start the container:

`docker compose up -d`

This will launch CouchDB internally on port 5984, connected to your existing Docker reverse proxy network (e.g., with Nginx Proxy Manager).

### Step 2. Set Up Reverse Proxy (Optional)

If you're using Nginx Proxy Manager (or Caddy, etc.), point a subdomain like couch.drafft.dev to the internal service drafft-couchdb:5984.

- Ensure ports 5984 are not exposed publicly.
- Use HTTPS for production.

:::warning
Ensure `client_max_body_size` is set high enough in your reverse proxy to accommodate large document uploads. Otherwise you may encounter errors when syncing large files (413 Request Entity Too Large).
:::

### Step 3. Enable CORS for Browser-Based Access

To allow Drafft to sync from a browser, enable Cross-Origin Resource Sharing (CORS):

:::tip
This is can be done via the CouchDB Admin UI. For advanced users, you can also use the command line.
:::

![CORS](/img/multiuser/couch-cors.webp)

### Restart CouchDB

`docker restart drafft-couchdb`

### Access CouchDB Admin UI

You can access the CouchDB Admin UI at http://localhost:5984/\_utils or via your reverse proxy URL (e.g., https://couch.drafft.dev/_utils).

## Choosing How to Configure Remote Sync

Drafft supports two ways of setting up the remote CouchDB database. Choose the approach that fits your workflow and security requirements.

### Option 1 — **Easy Mode: Let Drafft Create the Database**

If you use your **CouchDB admin account**, Drafft can automatically create the project database the first time you enter your sync settings.

Open:

**Project Settings → Remote Replication → Sync with remote DB**

Fill in:

- **Server URL**
- **Admin username + password**
- **Desired database name**

Drafft will:

- Check if the database exists
- Create it if it doesn’t
- Set basic permissions automatically

:::note Recommended for
Small teams, prototypes, and setups where granular security is not required.
:::

---

### Option 2 — **Advanced Mode: Create the Database & User Manually**

If you prefer tighter control, don’t want users to rely on an admin account, or want to configure custom permissions, this method is for you.

You can follow these steps either through Fauxton or the CouchDB HTTP API.

---

#### 1. Create a database

**Example database name:**

```
drafft_2_quantum_empanada
```

**Fauxton:**
**Create Database → drafft_2_quantum_empanada**

**HTTP API:**

```http
PUT /drafft_2_quantum_empanada
```

---

#### 2. Create a dedicated database user

**Fauxton:**
**Database → \_users → Create Document**

Paste:

```json
{
  "_id": "org.couchdb.user:drafft_sync_user_01",
  "name": "drafft_sync_user_01",
  "type": "user",
  "roles": [],
  "password": "super_secret_password"
}
```

**HTTP API:**

```http
PUT /_users/org.couchdb.user:drafft_sync_user_01
Content-Type: application/json

{
  "name": "drafft_sync_user_01",
  "type": "user",
  "roles": [],
  "password": "super_secret_password"
}
```

![user-creation](/img/multiuser/_users.jpg)

#### 3. Assign permissions

**Fauxton:**
**Database → drafft_2_quantum_empanada → Permissions → Members → Add User**

Add:
`drafft_sync_user_01`

**HTTP API:**

```http
PUT /drafft_2_quantum_empanada/_security
Content-Type: application/json

{
  "members": {
    "names": ["drafft_sync_user_01"],
    "roles": []
  },
  "admins": {
    "names": [],
    "roles": []
  }
}
```

![user-permission](/img/multiuser/_permissions.jpg)

#### 4. Configure Drafft

Open:

**Project Settings → Remote Replication**

Enter:

- Server URL
- **Your created database name**
- **The restricted username + password**

Drafft will sync using that user and will not attempt to create or modify any other databases.

:::tip Recommended for
Production systems, multi-project servers, and setups requiring least-privilege access.
:::

## Drafft Integration Requirements

### Database URL:

- Must begin with http:// or https://
- Example: https://couch.drafft.dev

### Database Name

Couchdb doesn’t allow capital letters so Drafft does not allow it either (when you create it uppercase the database name will be renamed to lowercase).
It is better to avoid spaces and special characters in the name.

The database name must:

- ✅ Start with a lowercase letter
- ✅ Contain only lowercase letters, numbers, or the symbols \_, $, (, ), +, -, /
- ❌ No uppercase letters, spaces, or special characters like @, !, etc.

#### Examples:

- ✅ drafft-sync
- ✅ user_data_01
- ❌ UserData (uppercase)
- ❌ user data (space)
- ❌ user@data (invalid character)

:::danger Caution
The database name must be unique for each project. If you try to sync a project with the same name as another one, it will try to sync with the existing database. potentially losing data and conflicting with other users.
:::

## Sync issues

Although the process is simple and it's quite tested, certain networking conditions, or a user working offline, could potentially overwrite another user's work if they work on the same item. It is recommended that the modifications are done when online or that the team organize the workflow to avoid such issues.

In case of conflicts, the app will try its best to choose the [winning revision](https://guide.couchdb.org/draft/conflicts.html) but it is also possible to manually resolve them either in couchdb server with a tool like [Fauxton](https://couchdb.apache.org/fauxton-visual-guide/index.html) or in the app by manually merging the changes. For the latter, revisions are shown in the document info drawer.

:::danger
Remember that making backups is always a good practice.
:::

## Notes

- All table names will appear as `drafft_v2_project_name_lowercase`
- CORS must be enabled in couchdb
- Database url MUST start with http:// or https://
- The local database is stored in the electron browser storage, it can be accessed with the dev tools via `indexedDB.databases()`.
