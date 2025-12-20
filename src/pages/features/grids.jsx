import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import GridEditorImg from "@site/static/img/grids/grid-02.webp";
import GetStartedCTA from "../../components/cta/GetStartedCTA";
import Head from "@docusaurus/Head";
import Markdown from "react-markdown";

export default function GridFeature() {
  const { siteConfig } = useDocusaurusContext();
  const markdown = `

# How It Works
- **Drag-and-Drop Simplicity:** Click to add rows, type to edit, drag to reorder — no setup, no fuss
- **Custom Columns:** Define your own columns with any name, type, or format
- **Inline Editing:** Edit directly in the grid like you're working in a spreadsheet
- **Flexible Output:** Export as JSON, as everything else.

# Why You'll Love It
- **Zero Schema Lock-In:** Structure is entirely up to you — no rigid templates or forced fields
- **Convenient Enough:** It’s no Excel, but it’s built-in, quick to use, and spits out clean JSON like everything else in Drafft 
- **Clean Exports:** Get neat, structured output ready for game engines or data pipelines

# Tidy Tables for Tangled Ideas  

Whether you’re managing enemy stats, balancing upgrade tiers, or tracking item rarities, the Grid Editor lets you see everything at a glance — and export it in the format you need.

# Minimal Setup, Maximum Clarity  

Sometimes all you need is a simple grid. We kept it dead simple so you can focus on the data, not the tool.

  `;

  return (
    <Layout title={`Features | ${siteConfig.title}`}>
      <Head>
        <meta charSet="utf-8" />
        <title>Grid Editor | Drafft - Clean, Flexible Table Editing for Game Data</title>
        <meta
          name="description"
          content="Build and manage game data tables with Drafft's Grid Editor. Inline editing, flexible column setup, and export to JSON, TOML, YAML or HJSON with no schema enforcement."
        />
        <meta property="og:title" content="Grid Editor | Drafft - Clean, Flexible Table Editing for Game Data" />
        <meta
          property="og:description"
          content="Build and manage game data tables with Drafft's Grid Editor. Inline editing, flexible column setup, and export to JSON, TOML, YAML or HJSON with no schema enforcement."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drafft.dev" />
        <link rel="canonical" href="https://drafft.dev" />
      </Head>
      <main className="bg-dark-background-darker-3 pt-8 lg:pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-primary-color-lightest">Organize Without Overhead</h2>
            <p className="mt-2 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-balance">
              The{" "}
              <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]">
                Grid Editor
              </span>{" "}
              is your spreadsheet, but simpler
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Create lightweight, structured tables for your game without dealing with actual spreadsheets. Drafft’s
              Grid Editor gives you a clean, minimal interface to map out game data in rows and columns.
            </p>
          </div>
          <img
            alt="Grid Editor Interface"
            src={GridEditorImg}
            width={2432}
            className="my-8 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-20"
          />
          <Markdown className="py-8 leading-loose">{markdown}</Markdown>
        </div>
        <div className="py-32 bg-dark-background-darkest">
          <GetStartedCTA />
        </div>
      </main>
    </Layout>
  );
}
