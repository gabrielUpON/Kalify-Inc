/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kalify Inc",
  url: "https://kalify.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://github.com/kalifyinc.png",
  organizationName: "yagasaki7k", // Usually your GitHub org/user name.
  projectName: "website-kalify", // Usually your repo name.

  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
  },

  plugins: [
    "docusaurus-plugin-sass",
    require.resolve("@cmfcmf/docusaurus-search-local"),
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image:
        "https://kalify.vercel.app/assets/images/pic07-786139e99d211ae24b327bfe5731a0ae.png",
      navbar: {
        title: "Kalify Inc.",
        logo: {
          alt: "Kalify Logo",
          src: "https://github.com/kalifyinc.png",
        },
        items: [
          { to: "/", label: "Início", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://twitter.com/KalifyInc",
            label: "Twitter",
            position: "right",
          },
          {
            href: "https://github.com/kalifyinc",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Projetos",
            items: [
              {
                label: "Essentials",
                to: "https://webessentials.com.br",
              },
              {
                label: "Onigiri Hardcore",
                to: "https://onigirihardcore.vercel.app",
              },
              {
                label: "FindYourPet",
                to: "https://findyourpet.vercel.app/",
              },
            ],
          },
          {
            title: "Comunidade",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/jhSepmE7nN",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/kalifyinc",
              },
            ],
          },
          {
            title: "Mais",
            items: [
              {
                label: "Início",
                to: "/",
              },
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "yagasaki.dev",
                href: "https://yagasaki.dev",
              },
            ],
          },
        ],
        copyright: `Copyright © 2018 - ${new Date().getFullYear()} Kalify Inc.`,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
    }),
};

module.exports = config;
