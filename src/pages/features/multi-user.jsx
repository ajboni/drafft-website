import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import RealTimeSyncImg from "@site/static/img/privacy/self-hosting.png";
import ConflictResolutionImg from "@site/static/img/multiuser/revision-history.jpg";
import Markdown from "react-markdown";
import GetStartedCTA from "../../components/cta/GetStartedCTA";

export default function MultiUserFeature() {
  const { siteConfig } = useDocusaurusContext();
  const markdown = `

# How It Works
- **Local-First, Always**: Drafft uses a local database by default, so you can work offline without worrying about internet connectivity or licensing.
- **Self-Hosted Sync**: Enable real-time collaboration by self-hosting a CouchDB server. You own the data, and you control the sync.
- **Real-Time Collaboration**: Multiple users can work on the same project simultaneously, with changes synced in real time.
- **Conflict Resolution**: Drafft includes a lock/unlock mechanism to prevent conflicts and data loss. If conflicts occur, you can manually resolve them or let Drafft choose the winning revision.

# Why You'll Love It
- **Privacy First**: Your data stays on your machine unless you choose to sync it to your own server.
- **Flexible Collaboration**: Work offline or online, and sync changes when you’re ready.
- **No Subscriptions**: No cloud lock-in or recurring fees—just a one-time purchase for a tool you fully control.

# Real-Time Sync Made Simple  
![Real-Time Sync Preview](${RealTimeSyncImg})  

Set up a CouchDB server (using Docker or any hosting provider), enable remote sync in Drafft, and invite your team. Each user:
1. Sets a unique username.
2. Connects to the same CouchDB server.
3. Works on the same project name.

Changes sync automatically, and everyone stays on the same page.

# Conflict Resolution  
![Conflict Resolution Preview](${ConflictResolutionImg})  

Drafft’s lock/unlock mechanism prevents conflicts by ensuring no two users edit the same item simultaneously. If conflicts arise:
- Drafft automatically chooses the winning revision.
- You can manually resolve conflicts using the document info drawer or tools like CouchDB’s Fauxton.

# Get Started with Multi-User Collaboration
Ready to collaborate with your team? [Download Drafft](/download) and set up your CouchDB server today. Your data, your rules.
  `;
  return (
    <Layout title={`Features | ${siteConfig.title}`}>
      <main className="bg-dark-background-darker-3 pt-8 lg:pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-primary-color-lightest">
              Collaborate Without Compromise
            </h2>
            <p className="mt-2 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-balance">
              Real-Time Multi-User Sync with{" "}
              <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]">
                Full Data Ownership
              </span>
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Drafft’s multi-user feature lets you collaborate in real time while keeping your data private and secure. Sync changes to your own CouchDB server—no subscriptions, no lock-in.
            </p>
          </div>
          <img
            alt="Multi-User Sync Interface"
            src={ConflictResolutionImg}
            width={2432}
            className="my-8 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-20"
          />
          <Markdown className="py-16 leading-loose">{markdown}</Markdown>
        </div>
        <div className="py-32 bg-dark-background-darkest">
          <GetStartedCTA />
        </div>
      </main>
    </Layout>
  );
}