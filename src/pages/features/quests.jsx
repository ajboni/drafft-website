import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import QuestEditorImg from "@site/static/img/quests/quests.webp";
import Markdown from "react-markdown";
import GetStartedCTA from "../../components/cta/GetStartedCTA";
import Head from "@docusaurus/Head";
import React from "react";

export default function QuestFeature() {
  const { siteConfig } = useDocusaurusContext();
  const markdown = `

# How It Works
- **Split View for Clarity:** Organize your quest logic into two panes — \`properties\` on the top, \`conditions\` on the bottom
- **Format-Friendly**: Use JSON, HJSON, TOML, or YAML — no enforced schema, just flexible structure on your terms 
- **Export Ready:** All data cleanly converts to structured JSON on export
- **It's Just Text (But It Works):** You could write it in a .txt file... but why would you, when this one's already wired into your project?

# Clear Separation of Logic  

Two panes, one quest. Define your quest’s metadata and completion logic without hopping between files. Helpful for:
- Main quests & side quests
- Conditions like flags, inventory checks, or dialogue states
- Mod-friendly design via clean, editable text
`;

  return (
    <Layout title={`Features | ${siteConfig.title}`}>
      <Head>
        <meta charSet="utf-8" />
        <title>Quest Editor | Drafft - Define Game Logic Without the Overhead</title>
        <meta
          name="description"
          content="Create and manage quests with structured logic and metadata in Drafft. Use JSON or plain text, connect documents, and stay organized with a dual-pane editor."
        />
        <meta property="og:title" content="Quest Editor | Drafft - Define Game Logic Without the Overhead" />
        <meta
          property="og:description"
          content="Create and manage quests with structured logic and metadata in Drafft. Use JSON or plain text, connect documents, and stay organized with a dual-pane editor."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drafft.dev" />
        <link rel="canonical" href="https://drafft.dev" />
      </Head>
      <main className="bg-dark-background-darker-3 pt-8 lg:pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-primary-color-lightest">Define Logic Without the Overhead</h2>
            <p className="mt-2 text-pretty text-5xl font-semibold tracking-tight leading-loose text-white sm:text-6xl lg:text-balance">
              Lightweight{" "}
              <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]">
                Quest Editing
              </span>{" "}
              Built In
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Drafft’s Quest Editor gives you a simple dual-pane view to jot down quest properties on one side and
              completion conditions on the other. It’s just structured text — but conveniently split, searchable, and
              always ready when inspiration strikes.
            </p>
          </div>
          <img
            alt="Quest Editor interface"
            src={QuestEditorImg}
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
