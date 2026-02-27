import {
  ArchiveBoxIcon,
  Bars3Icon,
  BeakerIcon,
  BookmarkIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CheckCircleIcon,
  CheckIcon,
  CloudIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  FilmIcon,
  LockClosedIcon,
  PlayIcon,
  ServerIcon,
  TableCellsIcon,
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
    name: "Story Variables",
    description:
      "Track game state with variables that support default values and live simulation. Use them in conditional logic and dynamic dialogue.",
    href: "/docs/reference/state-and-simulation-lifecycle",
    icon: Bars3Icon,
  },
  {
    name: "Scenarios",
    description:
      "Create reproducible test states to explore different narrative branches. Save and load specific variable configurations for QA and iterative development.",
    href: "/docs/reference/state-and-simulation-lifecycle",
    icon: BookmarkIcon,
  },
  {
    name: "Scenes",
    description:
      "Chain multiple dialogues and scripts into organized sequences. Create complex narrative flows by linking related content together.",
    icon: FilmIcon,
    href: "/docs/reference/scenes",
  },
  {
    name: "Simulator",
    description:
      "Preview and test your narratives with a built-in simulator. Execute scripts, evaluate conditions, and validate variable mutations before deployment.",
    href: "/docs/reference/state-and-simulation-lifecycle",
    icon: PlayIcon,
  },
  {
    name: "Script Logic",
    description:
      "Test narrative flows with simple scripting directives. Use @if conditionals, @set commands, and dynamic variable interpolation to create responsive dialogue.",
    href: "/docs/reference/script-editor",
    icon: BeakerIcon,
  },
  // {
  //   name: "Comprehensive Repositories",
  //   description:
  //     "Manage quests, items, grids, and miscellaneous objects with a simple text based repository system. Supports JSON, HJSON, TOML and plain text. ",
  //   icon: CloudIcon,
  // },
  {
    name: "Items Editor",
    description: "Create, organize, and export dynamic items with flexible structure and clean formats.",
    href: "/features/items",
    icon: ArchiveBoxIcon, // Replace with appropriate icon
  },
  {
    name: "Quests Editor",
    description: "Define quest properties and conditions with ease in a dual-pane interface.",
    href: "/features/quests",
    icon: ChatBubbleBottomCenterTextIcon, // Replace with appropriate icon
  },
  {
    name: "Grid Editor",
    description: "Organize data with a simple, user-friendly grid interface that exports to JSON.",
    href: "/features/grids",
    icon: TableCellsIcon, // Replace with appropriate icon
  },
  {
    name: "Kanban Boards",
    description: "Organize tasks and ideas with a simple, user-friendly kanban interface.",
    // href: "/features/kanban",
    icon: CheckIcon, // Replace with appropriate icon
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
