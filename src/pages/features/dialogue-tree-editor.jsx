import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "../../components/home/HomepageFeatures";
import DialogueTreeEditorImg from "@site/static/img/dialogue-tree-editor/dialogue-tree-editor-01.png";

export default function DialogueTreeEditor() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Features | ${siteConfig.title}`}>
      <main className="bg-dark-background-darker-3 py-8 lg:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-primary-color-lightest">Unleash Your Narrative Potential</h2>
            <p className="mt-2 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-balance">
              Non-linear, branching tree{" "}
              <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]">
                Dialogue Editor
              </span>
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Crafting intricate, non-linear narratives is a complex task that demands both clarity and flexibility.
              Drafft's Non-linear, Branching Tree Dialogue Editor seamlessly integrates a visual tree structure with a
              robust scripting editor, empowering you to design branching dialogues with ease.
            </p>
          </div>
          <img
            alt="App screenshot"
            src={DialogueTreeEditorImg}
            width={2432}
            className="mt-12 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-20"
          />
          <h2 className="text-2xl font-semibold mb-4">Feature Explanation:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Visual Tree Structure:</strong> Provides a clear overview of dialogue flow and branching paths,
              allowing you to visualize all possible outcomes.
            </li>
            <li>
              <strong>Linked Scripting Editor:</strong> Enables detailed scriptwriting without the constraints of small
              input boxes, facilitating the creation of complex scenes without screen clutter.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">User Benefits:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Enhanced Organization:</strong> Maintain a structured overview of your narrative, ensuring
              consistency and coherence.
            </li>
            <li>
              <strong>Efficient Workflow:</strong> Switch effortlessly between visual mapping and scriptwriting,
              streamlining the development process.
            </li>
            <li>
              <strong>Improved Collaboration:</strong> The intuitive interface makes it easier for team members to
              understand and contribute to the dialogue design.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Experience the Difference:</h2>
          <p className="text-lg mb-6">
            Elevate your storytelling capabilities with Drafft's Non-linear, Branching Tree Dialogue Editor. Start your
            free trial today and transform the way you design interactive narratives.
          </p>
          <div className="text-center">
            <a href="/plan-your-game" className="btn btn-primary">
              Plan Your Game | Drafft
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
