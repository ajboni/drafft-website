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

const features = [
  {
    name: "Non-linear Dialogue Tree Editor",
    description:
      "Seamlessly combine branching dialogue trees with linked scripts to craft intricate, non-linear narratives and flow-based logic.",
    href: "/features/dialogue-tree-editor",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },

  {
    name: "Scripting Editor",
    description:
      "Write scripts for immersive dialogue, scenes or even game logic. Automatically generate standard screenplay documents and add voiceover tags tailored for VO actors.",
    href: "/features/script-editor",
    icon: CodeBracketIcon,
  },
  {
    name: "GDD Editor",
    description:
      "Create, organize, and share comprehensive Game Design Documents (GDDs) with your team. Write in plain markdown, embed media, link to other documents, export to PDF.",
    href: "/features/gdd",
    icon: DocumentTextIcon,
  },

  {
    name: "Private Data, No Cloud",
    description:
      "Own your data and keep it secure. Use Drafft locally or with your own CouchDB setup — no cloud dependency, no compromises.",
    href: "/features/privacy",
    icon: LockClosedIcon,
  },

  {
    name: "Engine Agnostic",
    description:
      "Export your data in standard JSON format for use with any game engine. Tailor your data exports to any target language or format.",
    href: "/features/engine-agnostic",
    icon: Cog6ToothIcon,
  },
  {
    name: "Multi-User Collaboration",
    description:
      "Collaborate in real-time with your team. Sync changes instantly using your own CouchDB server instance.",
    href: "/features/multi-user",
    icon: UsersIcon,
  },
  {
    name: "Comprehensive Repositories",
    description:
      "Manage quests, items, grids, and miscellaneous objects with a simple text based repository system. Supports JSON, HJSON, TOML and plain text. ",
    icon: CloudIcon,
  },
  {
    name: "API Access",
    description:
      "Leverage Drafft's (quite limited) API to automate tasks, integrate with other tools, and streamline workflows.",
    href: "/docs/reference/api",
    icon: CloudIcon,
  },
  {
    name: "Central Repository",
    description: "Store and manage all your game development assets in one place. ",
    icon: ServerIcon,
  },
  {
    name: "True Multiplatform",
    description: "Runs on Linux (x86_64, arm64, snap, flatpak), arm64, MacOS, and Windows. ",
    icon: CheckCircleIcon,
  },
];

export default features;
