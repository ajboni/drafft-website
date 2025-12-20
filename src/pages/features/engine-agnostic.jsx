import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import EngineAgnosticImg from "@site/static/img/engine-agnostic/engine-agnostic.jpg";
import CustomExportImg from "@site/static/img/engine-agnostic/custom-export.jpg";
import Markdown from "react-markdown";
import GetStartedCTA from "../../components/cta/GetStartedCTA";

export default function EngineAgnosticFeature() {
  const { siteConfig } = useDocusaurusContext();
  const markdown = `

# How It Works
- **Engine-Agnostic Design:** Drafft doesn’t assume your target engine or platform. It provides a flexible foundation for any project.
- **Standard JSON Output:** Export your data in clean, standardized JSON format, ready for integration with any engine or tool.
- **Custom Export Rules:** Define your own export rules to transform the JSON output to match your engine’s specific requirements.

# Why You'll Love It
- **Flexibility for Any Workflow:** Whether you’re using Unity, Unreal, Godot, or a custom engine, Drafft adapts to your needs.
- **No Lock-In:** Your data is portable and future-proof. Use it with any engine, now or in the future.
- **Developer-Centric:** Customizable export rules give you full control over how your data is structured and delivered.

# Engine-Agnostic Flexibility  

Drafft works seamlessly with any game engine or platform. Its standardized JSON output ensures compatibility, while custom export rules let you tailor the data to your exact needs.

# Customizable Exports  
![Custom Export Preview](${CustomExportImg})  

Create export rules to transform your data into the perfect format for your engine. Whether it’s Unity’s ScriptableObjects, Unreal’s DataTables, or a custom schema, Drafft has you covered.
  `;
  return (
    <Layout title={`Features | ${siteConfig.title}`}>
      <main className="bg-dark-background-darker-3 pt-8 lg:pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-primary-color-lightest">Flexibility for Every Engine</h2>
            <p className="mt-2 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-balance">
              Build for{" "}
              <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]">
                Any Platform
              </span>
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Drafft is engine-agnostic, providing standardized JSON output and customizable export rules to fit any game engine or workflow.
            </p>
          </div>
          <img
            alt="Engine-Agnostic interface"
            src={EngineAgnosticImg}
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