import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "../../components/home/HomepageFeatures";
import DialogueTreeEditorImg from "@site/static/img/dialogue-tree-editor/dialogue-tree-editor-01.png";
import Markdown from "react-markdown";
import GetStartedCTA from "../../components/cta/GetStartedCTA";

const markdown = "# Hi, *Pluto*!";
export default function DialogueTreeEditor() {
  const { siteConfig } = useDocusaurusContext();
  const markdown = `


# Feature Breakdown
- See the Big Picture: The visual tree structure lets you map out your dialogue flow, so you always know where the story is headed.
- Write Without Limits: The scripting editor gives you the freedom to write complex scenes—no more cramming text into tiny boxes.

# Why You'll Love It
- Stay Organized: Keep your dialogue structured and easy to follow. No more getting lost in messy branching paths.
- Work Faster: Jump between the visual layout and scripting editor seamlessly—build your scenes without friction.
- Team-Friendly: Whether you're solo or working with others, Drafft makes it easy to collaborate and refine your story.

# See It in Action
Ready to take your interactive storytelling to the next level? [Try Drafft](/download) today and start crafting better dialogues with ease!   
  `;
  return (
    <Layout title={`Features | ${siteConfig.title}`}>
      <main className="bg-dark-background-darker-3 pt-8 lg:pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            className="my-8 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-20"
          />
          <Markdown className="py-16 leading-loose">{markdown}</Markdown>
        </div>
        <div className="py-32 bg-dark-background-darkest">
          <GetStartedCTA/>

        </div>
      </main>
    </Layout>
  );
}
