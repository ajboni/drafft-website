
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// TODO: Put proper image
import ScriptsFeatureImg from "@site/static/img/app-busy.png"
import Markdown from "react-markdown";
import GetStartedCTA from "../../components/cta/GetStartedCTA";

export default function ScriptsFeature() {
  const { siteConfig } = useDocusaurusContext();
  const markdown = `

# How It Works
- **Effortless Screenwriting:** Auto-generates industry-standard screenplay documents so you can focus on storytelling, not formatting.
- **Multi-Language Support:** Write scripts in several programming languages, each complemented by Drafft's own simple speech language.
- **Smart Parsing:** Automatically identifies voice-overs, emotions, commands, and functions, making script organization effortless.

# Why You'll Love It
- **Streamlined Workflow:** Everything converts to clean JSON when you export, keeping the process smooth and game engine-friendly.
- **Stay Organized:** Keep scripts structured and easy to navigate with automatic text extraction for essential elements.
- **Flexible & Powerful:** Whether you're writing a cinematic cutscene or dynamic dialogue, Drafft gives you the tools to do it right.

# See It in Action
Ready to take your scriptwriting to the next level? [Try Drafft](/download) today and bring your narratives to life effortlessly!
  `;
  return (
    <Layout title={`Features | ${siteConfig.title}`}>
      <main className="bg-dark-background-darker-3 pt-8 lg:pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-primary-color-lightest">Write, Organize, and Export with Ease</h2>
            <p className="mt-2 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-balance">
              Powerful & Intuitive {" "}
              <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]">
                Scripting Editor
              </span>
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Drafft's scripting tool streamlines the writing process with auto-generated screenplay documents, multi-language support, and smart parsing for essential elements like voice-overs and commands. Everything exports to clean JSON, making your workflow seamless.
            </p>
          </div>
          <img
            alt="App screenshot"
            src={ScriptsFeatureImg}
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
