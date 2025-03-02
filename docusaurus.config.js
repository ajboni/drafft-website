// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import tomorrowNight from "./shared/prism/prism-uaf-theme.js";
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Drafft",
  tagline:
    "Centralize your scripts, dialogue trees, and GDDs in one powerful platform. Drafft is offline-first, privacy-focused, and built for indie developers.",
  favicon: "img/favicon.ico",
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
      }),
    ],
  ],
  customFields: {
    socials: [
      {
        name: "YouTube",
        url: "https://youtube.com/drafft",
        icon: "youtube",
      },
      {
        name: "X",
        url: "https://x.com/drafftapp",
        icon: "x",
      },
    ],
  },
  // Set the production url of your site here
  url: "https://drafft.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "aboni", // Usually your GitHub org/user name.
  projectName: "drafft", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    ["@gracefullight/docusaurus-plugin-microsoft-clarity", { projectId: "ptje4lffwd" }],
    "docusaurus-plugin-zooming",
    [
      "@dipakparmar/docusaurus-plugin-umami",
      /** @type {import('@dipakparmar/docusaurus-plugin-umami').Options} */
      ({
        websiteID: "9b4b4462-208a-4160-bdc3-526c4e320c9c", // Required
        analyticsDomain: "cloud.umami.is", // Required
      }),
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ajboni/drafft-website/edit/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ajboni/drafft-website/edit/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "description",
          content:
            "Drafft v2 is the ultimate collaborative tool for game developers. Organize your game design process with GDDs, Scripts, Dialogue Trees, and a Database Editor—all exportable to JSON.Drafft is multi-platform offline-first, privacy-focused, and built for indie developers.",
        },
        {
          name: "keywords",
          content:
            "game development, game design, collaborative tools, GDD, dialogue trees, JSON exporter, indie game dev, game development tools, dialogue tree, dialogue tree software, dialog tree ",
        },
        { property: "og:title", content: "Drafft v2: The All-in-One Game Development Tool" },
        {
          property: "og:description",
          content:
            "Drafft v2 is the ultimate collaborative tool for game developers. Organize your game design process with GDDs, Scripts, Dialogue Trees, and a Database Editor—all exportable to JSON. Drafft is multi-platform offline-first, privacy-focused, and built for indie developers.",
        },
        { property: "og:image", content: "https://drafft.dev/img/drafft-social-card.png" },
        { property: "og:url", content: "https://drafft.dev" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Drafft v2: The All-in-One Game Development Tool" },
        {
          name: "twitter:description",
          content:
            "Organize your game design process with Drafft v2. Collaborate on GDDs, Scripts, Dialogue Trees, and more—all in one place.",
        },
        { name: "twitter:image", content: "https://drafft.dev/img/drafft-social-card.png" },
        { name: "twitter:site", content: "@DrafftApp" },
        { name: "twitter:creator", content: "@DrafftApp" },
      ],

      image: "img/drafft-social-card.png",
      // announcementBar: {
      //   id: "support_us",
      //   content:
      //     '<strong>Note:</strong> This site is for Drafft 2 which is currently under development. For the stable version, please visit <a target="_blank" href="https://baj.itch.io/drafft">our itch.io page</a>.',
      //   backgroundColor: "var(--primary-color-darkest)",
      //   textColor: "var(--dark-foreground)",
      //   isCloseable: true,
      // },
      navbar: {
        title: "Drafft",
        logo: {
          alt: "Plan Your Game",
          src: "/assets/logos/icon_1024.png",
        },
        items: [
          // { to: "/features", label: "Features", position: "left" },
          { to: "/#pricing", label: "Pricing", position: "left" ,   activeBaseRegex: '/\#pricing',},
          { to: "/gallery", label: "Gallery", position: "left" },

          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            position: "right",
            label: "Get Started",
            to: "/download",
            className: "btn-primary-navbar",
          },
          // {
          //   position: "right",
          //   label: "Purchase",
          //   to: "/purchase",
          //   className: "btn-primary py-2.5"
          // }
        ],
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: false,
        disableSwitch: true,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                href: "/docs/getting-started",
              },
              {
                label: "FAQ",
                href: "/#faqs",
              },
              {
                label: "EULA",
                href: "/eula",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discussion Board",
                href: "https://baj.itch.io/drafft/community",
              },
              {
                label: "Feature Requests",
                href: "https://itch.io/t/4389447/drafft-v2-development-wishlist-feedback",
              },
              {
                label: "Drafft Legacy",
                href: "https://baj.itch.io/drafft",
              },
              {
                label: "Contact",
                href: "mailto:hello@drafft.dev",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Pricing",
                href: "/pricing",
              },
              {
                label: "Blog",
                href: "/blog",
              },
              {
                label: "Support",
                href: "mailto:support@drafft.dev",
              },
              // {
              //   label: "GitHub",
              //   href: "https://github.com/yourusername/drafft",
              // },
            ],
          },
        ],
        logo: {
          alt: "Plan Your Game",
          src: "/assets/logos/icon_1024.png",
          href: "https://drafft.dev",
          width: 160,
          height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Drafft.`,
      },
      prism: {
        theme: tomorrowNight,
        darkTheme: tomorrowNight,
      },
    }),
};

export default config;
