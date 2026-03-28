import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Mosaic BMAD',
  tagline: 'AI-driven development methodology for Claude Code — 26 agents, 133 commands, one installer',
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
          sidebarId: 'modulesSidebar',
          position: 'left',
          label: 'Modules',
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
          title: 'Modules',
          items: [
            { label: 'bmad-core', to: '/docs/modules/bmad-core' },
            { label: 'bmad-bmm', to: '/docs/modules/bmad-bmm' },
            { label: 'bmad-gds', to: '/docs/modules/bmad-gds' },
            { label: 'bmad-edu', to: '/docs/modules/bmad-edu' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'BMad Method', href: 'https://github.com/bmad-code-org/BMAD-METHOD' },
            { label: 'BMad Documentation', href: 'https://github.com/bmad-code-org/BMAD-METHOD#readme' },
            { label: 'Claude Code', href: 'https://claude.ai/claude-code' },
            { label: 'AnkleBreaker Unity MCP', href: 'https://github.com/AnkleBreaker-Studio/unity-mcp-plugin' },
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
