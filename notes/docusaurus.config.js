const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tomando nota',
  tagline: 'por Tamires Cordeiro',
  url: 'http://mirescordeiro.github.io',
  baseUrl: '/notes',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'mirescordeiro', 
  projectName: 'notes',
  trailingSlash: false,
  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexBlog: false,
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Tomando nota',
      items: [],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    footer: {
      links: [],
      copyright: 'Copyright © Tamires Cordeiro',
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: '/',
          path: './docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            return `https://github.com/mirescordeiro/notes/edit/main/${versionDocsDirPath}/${docPath}`;
          },
          editCurrentVersion: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
