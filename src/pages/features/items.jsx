import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ItemsEditorImg from "@site/static/img/items/items-01.webp";
import SchemaEditorImg from "@site/static/img/items/items-02.webp";
import Markdown from "react-markdown";
import GetStartedCTA from "../../components/cta/GetStartedCTA";
import Head from "@docusaurus/Head";
import React from "react";

export default function ItemsFeature() {
  const { siteConfig } = useDocusaurusContext();
  const markdown = `

# How It Works
- **Schema-Free or Structured:** Define items using freeform text or flexible schemas in JSON, HJSON, TOML, or YAML
- **Inline Editing:** Quickly update fields in-place with real-time validation and syntax highlighting
- **Export-Ready:** Seamlessly export items as clean, structured JSON ready for any game engine
- **No Lock-In:** Use the format you prefer—plain text, structured keys, or hybrid
- **Saves You a Tab:** Sure, it's basically a text editor with colors... but it’s right here in the app, where you need it, when you need it.

# Flexible Item Definitions  

Use structured formats like JSON or HJSON—or stick with simple key-value pairs. Perfect for:
- Weapons, tools, and gear
- Consumables and upgrades
- Main menu items
- Custom-defined objects (loot, ingredients, etc.)  

![Schema Editor Preview](${SchemaEditorImg})  


`;
  return (
    <Layout title={`Features | ${siteConfig.title}`}>
      <Head>
        <meta charSet="utf-8" />
        <title>Items Editor | Drafft - Flexible Game Item Repository</title>
        <meta
          name="description"
          content="Whether you're a schema fanatic or just scribbling notes, Drafft’s Items Editor lets you define your game objects your way — structured, messy, or somewhere in between. It’s just text… but it’s your text, conveniently right where you need it."
        />
        <meta property="og:title" content="Items Editor | Drafft - Flexible Game Item Repository" />
        <meta
          property="og:description"
          content="Create and manage game items with Drafft's flexible editor. Use freeform or structured formats like JSON and HJSON. Export clean data to any engine."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drafft.dev" />
        <link rel="canonical" href="https://drafft.dev" />
      </Head>
      <main className="bg-dark-background-darker-3 pt-8 lg:pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-primary-color-lightest">Define, Organize, Connect</h2>
            <p className="mt-2 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-balance">
              Manage Game Items in{" "}
              <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]">
                Any Format
              </span>
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Whether you're a schema fanatic or just scribbling notes, Drafft’s Items Editor lets you define your game
              objects your way — structured, messy, or somewhere in between. It’s just text… but it’s your text,
              conveniently right where you need it.
            </p>
          </div>
          <div className="w-full flex items-center">
            <img
              alt="Items Editor interface"
              src={ItemsEditorImg}
              width={1200}
              className="mx-auto my-8 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-14 "
            />
          </div>
          <Markdown className="py-16 leading-loose">{markdown}</Markdown>
        </div>
        <div className="py-32 bg-dark-background-darkest">
          <GetStartedCTA />
        </div>
      </main>
    </Layout>
  );
}
