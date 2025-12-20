import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import GDDEditorImg from "@site/static/img/gdd/gdd-01.webp";
import DocumentLinkingImg from "@site/static/img/gdd/gdd-02.webp";
import TreeStructureImg from "@site/static/img/gdd/gdd-03.webp";
import Markdown from "react-markdown";
import GetStartedCTA from "../../components/cta/GetStartedCTA";
import Head from "@docusaurus/Head";

export default function GddFeature() {
  const { siteConfig } = useDocusaurusContext();
  const markdown = `

# How It Works
- **Markdown Foundation:** Write naturally with full Markdown support while maintaining clean, portable files
- **Smart Document Linking:** Easily reference actors, scripts, and dialogues with [[wiki-style links]]
- **Tree Structure Organization:** Navigate your game design like a file system with drag-and-drop sorting
- **Media Management:** Embed images, videos, and audio files directly in your documents

# Why You'll Love It
- **Developer-Friendly:** Content saves as plain Markdown that optionally exports cleanly to JSON
- **Centralized Design Hub:** Keep all game documentation in one searchable, organized location
- **Visual Context:** Preview linked documents and embedded media without leaving the editor

# Structured Yet Flexible  
![Document Linking Preview](${DocumentLinkingImg})  

Maintain relationships between design elements while keeping everything human-readable. Perfect for:
- Game design documents
- Character bios
- Worldbuilding bibles
- Technical specifications

# Organized Hierarchy  
![Tree Structure Preview](${TreeStructureImg})  

Visualize your game's structure with nested documents that mirror your project's architecture. Export maintains folder structure in JSON format.
  `;
  return (
    <Layout title={`Features | ${siteConfig.title}`}>
      <Head>
        <meta charSet="utf-8" />
        <title>GDD Editor | Drafft - Unified Game Design Documentation in Markdown</title>
        <meta
          name="description"
          content="Streamline your game design process with Drafft's GDD Editor. Write in Markdown, link documents wiki-style, organize with tree structures, and export to JSON for seamless integration."
        />
        <meta property="og:title" content="GDD Editor | Drafft - Unified Game Design Documentation in Markdown" />
        <meta
          property="og:description"
          content="Streamline your game design process with Drafft's GDD Editor. Write in Markdown, link documents wiki-style, organize with tree structures, and export to JSON for seamless integration."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drafft.dev" />
        <link rel="canonical" href="https://drafft.dev" />
      </Head>
      <main className="bg-dark-background-darker-3 pt-8 lg:pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-primary-color-lightest">Design, Document, and Connect</h2>
            <p className="mt-2 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-balance">
              Unified Game Design in{" "}
              <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]">
                Markdown
              </span>
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Drafft's GDD Editor combines the simplicity of Markdown with powerful game development features -
              wiki-style document linking, media-rich editing, and JSON export that maintains your project's structure.
            </p>
          </div>
          <img
            alt="GDD Editor interface"
            src={GDDEditorImg}
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
