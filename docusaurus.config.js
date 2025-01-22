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
  tagline: "Organize GDDs, streamline dialogues, and collaborate effortlessly—all in one place.",
  favicon: "assets/icon.ico",
  customFields: {
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/ajboni",
        icon: "github",
      },

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
      {
        name: "Instagram",
        url: "https://instagram.com/drafftapp",
        icon: "instagram",
      },
      {
        name: "TikTok",
        url: "https://tiktok.com/@drafftapp",
        icon: "tiktok",
      },
    ],
  },
  // Set the production url of your site here
  url: "https://drraft.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

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
    [
      "@dipakparmar/docusaurus-plugin-umami",
      /** @type {import('@dipakparmar/docusaurus-plugin-umami').Options} */
      ({
        websiteID: "9b4b4462-208a-4160-bdc3-526c4e320c9c", // Required
        analyticsDomain: "drafft.dev", // Required
        scriptName: "script.js", // Optional
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
    require.resolve("docusaurus-lunr-search"),
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
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      announcementBar: {
        id: "support_us",
        content:
          '<strong>Note:</strong> This site is for Drafft 2 which is currently under development. For the stable version, please visit <a target="_blank" href="https://baj.itch.io/drafft">our itch.io page</a>.',
        backgroundColor: "var(--primary-color-darkest)",
        textColor: "var(--dark-foreground)",
        isCloseable: true,
      },
      navbar: {
        title: "Drafft",
        logo: {
          alt: "Plan Your Game",
          src: "/assets/logos/icon_1024.png",
        },
        items: [
          { to: "/features", label: "Features", position: "left" },
          { to: "/pricing", label: "Pricing", position: "left" },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            position: "right",
            label: "Get Started for Free",
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
        respectPrefersColorScheme: true,
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
                href: "/faq",
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
          src: "assets/logos/icon_1024.png",
          href: "https://opensource.fb.com",
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
