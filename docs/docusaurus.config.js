// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cresh',
  tagline: 'Read everything related with CreSh project',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cresh-creativity-share.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CreSh-Creativity-Share', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'Cresh',
        logo: {
          alt: 'Cresh',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // RIGHT          
          {
            href: "https://github.com/CreSh-Creativity-Share",
            className: "app-icon app-icon--github",
            title: "GitHub",
            position: "right",
          },
          {
            href: "https://discord.com/channels/1120346503643410522/1120346504218021890",
            className: "app-icon app-icon--discord",
            title: "Discord",
            position: "right",
          },
          {
            href: "https://eu-north-1.console.aws.amazon.com/console/home?region=eu-north-1",
            className: "app-icon app-icon--aws",
            title: "AWS",
            position: "right",
          },
          {
            href: "https://www.figma.com/file/zA9QlyKiAQUlUjRsS0r4wx/Cresh?type=design&node-id=0%3A1&mode=design&t=K3vyUQIyFDcEENo7-1",
            className: "app-icon app-icon--figma",
            title: "Figma",
            position: "right",
          },
          {
            href: "https://miro.com/welcome/UlRPcmZjcExScURhZjhWa1o2bnFKbGl4eTZsWERnSnBBeE13NG1YSHFPR0R0VnB5cEcxMW5oN25GTnVNWGQ5SHwzMDc0NDU3MzU1MTQxMTAwODIzfDE=?share_link_id=16939220652",
            className: "app-icon app-icon--miro",
            title: "Miro",
            position: "right",
          },
          {
            href: "https://shared-creativity.atlassian.net/jira/software/projects/SC/boards/1",
            className: "app-icon app-icon--jira",
            title: "Jira",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
