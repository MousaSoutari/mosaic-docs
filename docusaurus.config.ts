import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Mosaic BMAD Plugins',
  tagline: 'AI-driven development methodology for Claude Code — 30 agents, 133 commands, 7 plugins',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://mousasoutari.github.io',
  baseUrl: '/mosaic-docs/',

  organizationName: 'MousaSoutari',
  projectName: 'mosaic-docs',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/MousaSoutari/mosaic-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/mosaic-social-card.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Mosaic BMAD',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'pluginsSidebar',
          position: 'left',
          label: 'Plugins',
        },
        {
          href: 'https://github.com/MousaSoutari',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Getting Started',
          items: [
            { label: 'Installation', to: '/docs/getting-started/installation' },
            { label: 'Quick Start', to: '/docs/getting-started/quick-start' },
            { label: 'Architecture', to: '/docs/getting-started/architecture' },
          ],
        },
        {
          title: 'Plugins',
          items: [
            { label: 'bmad-core', to: '/docs/plugins/bmad-core' },
            { label: 'bmad-bmm', to: '/docs/plugins/bmad-bmm' },
            { label: 'bmad-gds', to: '/docs/plugins/bmad-gds' },
            { label: 'bmad-edu', to: '/docs/plugins/bmad-edu' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'BMad Method', href: 'https://github.com/bmad-code-org/BMAD-METHOD' },
            { label: 'Claude Code', href: 'https://claude.ai/claude-code' },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Mousa Soutari. Built with Docusaurus. BMad is a trademark of BMad Code, LLC.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'json', 'yaml', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
