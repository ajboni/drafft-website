import {
  ChatBubbleOvalLeftEllipsisIcon,
  CheckCircleIcon,
  CloudIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  LockClosedIcon,
  ServerIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import GetStartedCTA from "../cta/GetStartedCTA";

const features = [
  {
    name: "Non-linear Dialogue Editor",
    description:
      "Seamlessly combine branching dialogue trees with linked scripts to craft intricate, non-linear narratives and flow-based logic.",
    href: "#",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },

  {
    name: "Scripting Editor",
    description:
      "Write scripts for immersive dialogue, scenes or even game logic. Automatically generate standard screenplay documents and add voiceover tags tailored for VO actors.",
    href: "#",
    icon: CodeBracketIcon,
  },
  {
    name: "GDD Editor",
    description:
      "Create, organize, and share comprehensive Game Design Documents (GDDs) with your team. Write in plain markdown, embed media, link to other documents, export to PDF.",
    href: "#",
    icon: DocumentTextIcon,
  },

  {
    name: "Private Data, No Cloud",
    description:
      "Own your data and keep it secure. Use Drafft locally or with your own CouchDB setup — no cloud dependency, no compromises.",
    href: "#",
    icon: LockClosedIcon,
  },

  {
    name: "Engine Agnostic",
    description:
      "Export your data in standard JSON format for use with any game engine. Tailor your data exports to any target language or format.",
    href: "#",
    icon: Cog6ToothIcon,
  },
  {
    name: "Multi-User Collaboration",
    description:
      "Collaborate in real-time with your team. Sync changes instantly using your own CouchDB server instance.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Comprehensive Repositories",
    description:
      "Manage quests, items, grids, and miscellaneous objects with a simple text based repository system. Supports JSON, HJSON, TOML and plain text. ",
    href: "#",
    icon: CloudIcon,
  },
  {
    name: "API Access",
    description:
      "Leverage Drafft's (quite limited) API to automate tasks, integrate with other tools, and streamline workflows.",
    href: "#",
    icon: CloudIcon,
  },
  {
    name: "Central Repository",
    description: "Store and manage all your game development assets in one place. ",
    icon: ServerIcon,
  },

  {
    name: "Evaluation Mode",
    description: "Use all features indefinitely in evaluation mode — no restrictions, no missing options.",
    icon: CheckCircleIcon,
  },
  {
    name: "True Multiplatform",
    description: "Runs on Linux (x86_64, arm64, snap, flatpak), arm64, MacOS, and Windows. ",
    icon: CheckCircleIcon,
  },
];

export default function HomepageFeatures({ maxFeatures = features.length }) {
  return (
    <div className="bg-dark-background-darker-3 scroll-m-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-primary-color-lightest">Streamline Game Development</h2>
          <p className="mt-2 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-balance">
            Everything you need to bring your game to{" "}
            <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]">
              life
            </span>
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Drafft is your all-in-one multiplatform app for game development. From scripting and dialogue design to item
            databases and GDDs, our tools integrate seamlessly with your workflow. Collaborate in real-time, export in
            standard JSON, and customize your projects to fit any engine.
          </p>
        </div>
        <div className="mx-auto mt-16 mb-16 max-w-2xl sm:mt-20 lg:mt-24 lg:mb-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.slice(0, maxFeatures).map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-white">
                  {feature.href ? (
                    <a href={feature.href} className="flex items-center gap-x-3">
                      <feature.icon aria-hidden="true" className="size-5 flex-none text-primary-color-lightest" />
                      <span className="text-white">{feature.name}</span>
                    </a>
                  ) : (
                    <>
                      <feature.icon aria-hidden="true" className="size-5 flex-none text-primary-color-lightest" />
                      <span className="text-white">{feature.name}</span>
                    </>
                  )}
                </dt>
                <dd className="mt-2 mx-0 flex flex-auto flex-col text-base/7 text-gray-300">
                  <div className="flex-auto">{feature.description}</div>
                  {feature.href && (
                    <div className="mt-4">
                      <a href={feature.href} className="text-sm/6 font-semibold text-primary-color-lightest">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        {maxFeatures < features.length && (
          <div className="mx-auto mt-16 mb-16 max-w-md sm:mt-20 lg:mt-24 lg:mb-24 text-center">
            <a className="btn-primary " href="/features">
              Explore All Features
            </a>
          </div>
        )}
      </div>
      <div className="w-full bg-dark-background-darkest">
        <div className="py-24 max-w-2xl mx-auto text-center text-sm/6 text-gray-300">
          <GetStartedCTA />
        </div>
      </div>
    </div>
  );
}
