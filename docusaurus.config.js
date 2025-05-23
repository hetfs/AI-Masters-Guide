// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docugsaurus/types').Config} */
const config = {
  title: 'AI Masters From Zero to AI export',
  tagline: 'AI Masters Guide',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://hetfs.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/AI-Masters-Guide/',
  trailingSlash: false, // GitHub Pages adds a trailing slash (/)

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hetfs', // Usually your GitHub org/user name.
  projectName: 'AI Masters Guide', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalisation, you can use this field to set
  // useful metadata like HTML lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hetfs/AI-Masters-Guide',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hetfs/AI-Masters-Guide',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
      title: 'documentation',
        logo: {
          alt: 'HEFTS LTD Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/hetfs/AI-Masters-Guide',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'documentation ',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
              label: 'Facebook',
                href: 'https://m.facebook.com/profile.php?id=100090714730738',
              },
              
              {
                label: 'X',
                href: 'https://x.com/hetf01',
              },
            {
                label: 'Buy Me A Coffee',
                href: 'https://www.buymeacoffee.com/hetfs01f',

              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/hetfs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HEFTS LTD.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
