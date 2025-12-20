import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import LocalDatabaseImg from "@site/static/img/privacy/local-database.webp";
import SelfHostingImg from "@site/static/img/privacy/self-hosting.webp";
import Markdown from "react-markdown";
import GetStartedCTA from "../../components/cta/GetStartedCTA";

export default function PrivacyFeature() {
  const { siteConfig } = useDocusaurusContext();
  const markdown = `

# How It Works
- **Local-First by Default:** Drafft uses a local database that stores all your data on your device, ensuring complete privacy and offline access.
- **No Internet Required:** Work without an internet connection—your data never leaves your machine unless you choose to sync it.
- **Self-Hosted Sync (Optional):** If you need collaboration or cloud sync, you can opt to self-host a CouchDB instance, giving you full control over your data.

# Why You'll Love It
- **Privacy by Design:** Your data is yours alone. Drafft doesn’t call home, track you, or store your data in any way.
- **Complete Data Ownership:** Whether you stay local or self-host, you retain full ownership of your data at all times.
- **Flexible Collaboration:** Self-hosting allows you to share and sync data securely with your team, without relying on third-party services.
- **Export Anytime:** If you ever decide not to use Drafft anymore, export your entire database in plain JSON—no lock-in, no hassle.

# Local-First Privacy  

Drafft prioritizes your privacy by keeping everything local. No cloud storage, no tracking—just your data, on your device.

# Self-Hosted Sync  
![Self-Hosting Preview](${SelfHostingImg})  

For those who need collaboration, Drafft lets you self-host a CouchDB database. This ensures you own your data while enabling seamless syncing across devices.
  `;
  return (
    <Layout title={`Features | ${siteConfig.title}`}>
      <main className="bg-dark-background-darker-3 pt-8 lg:pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-primary-color-lightest">Privacy and Control</h2>
            <p className="mt-2 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-balance">
              Your Data,{" "}
              <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]">
                Your Rules
              </span>
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Drafft is built with privacy in mind. By default, your data stays local and offline. If you need syncing,
              self-hosting gives you full control.
            </p>
          </div>
          <img
            alt="Local Database interface"
            src={LocalDatabaseImg}
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
