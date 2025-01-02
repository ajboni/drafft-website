// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Drafft",
  tagline: "Organize GDDs, streamline dialogues, and collaborate effortlessly—all in one place.",
  favicon: "assets/icon.ico",
  customFields: {
    socials: [
      {
        name: "Twitter",
        url: "https://twitter.com/yourusername",
        icon: "twitter"
      },
      {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: "github"
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        icon: "linkedin"
      },
      {
        name: "YouTube",
        url: "https://youtube.com/yourusername",
        icon: "youtube"
      },
      {
        name: "X",
        url: "https://x.com/yourusername",
        icon: "x"
      },
      {
        name: "Instagram",
        url: "https://instagram.com/yourusername",
        icon: "instagram"
      },
      {
        name: "TikTok",
        url: "https://tiktok.com/@yourusername",
        icon: "tiktok"
      }
    ]
  },
  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
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
    locales: ["en"]
  },

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        }
      };
    },
    require.resolve("docusaurus-lunr-search")
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
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn"
        },
        theme: {
          customCss: "./src/css/custom.css"
        }
      })
    ]
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
        isCloseable: true
      },
      navbar: {
        title: "Drafft",
        logo: {
          alt: "Plan Your Game",
          src: "assets/logos/icon_1024.png"
        },
        items: [
          { to: "/pricing", label: "Pricing", position: "left" },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs"
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            position: "right",
            label: "Get Started for Free",
            to: "/download",
            className: "btn-primary-navbar"
          }
          // {
          //   position: "right",
          //   label: "Purchase",
          //   to: "/purchase",
          //   className: "btn-primary py-2.5"
          // }
        ]
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
        disableSwitch: true
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                href: "/docs/getting-started"
              },
              {
                label: "FAQ",
                href: "/docs/faq"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Discussion Board",
                href: "https://baj.itch.io/drafft/community"
              },
              {
                label: "Feature Requests",
                href: "https://itch.io/t/4389447/drafft-v2-development-wishlist-feedback"
              },
              {
                label: "Itch.io Page",
                href: "https://baj.itch.io/drafft"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "/blog"
              },
              {
                label: "GitHub",
                href: "https://github.com/yourusername/drafft"
              },
              {
                label: "EULA",
                href: "/eula"
              }
            ]
          }
        ],
        logo: {
          alt: "Plan Your Game",
          src: "assets/logos/icon_1024.png",
          href: "https://opensource.fb.com",
          width: 160,
          height: 51
        },
        copyright: `Copyright © ${new Date().getFullYear()} Drafft.`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    })
};

export default config;
