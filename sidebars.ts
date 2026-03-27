import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/architecture',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/agents',
        'concepts/commands',
        'concepts/workflows',
      ],
    },
  ],
  pluginsSidebar: [
    'plugins/overview',
    {
      type: 'category',
      label: 'Core',
      items: ['plugins/bmad-core'],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'plugins/bmad-bmm',
        'plugins/bmad-gds',
        'plugins/bmad-tea',
      ],
    },
    {
      type: 'category',
      label: 'Creative & Education',
      items: [
        'plugins/bmad-cis',
        'plugins/bmad-edu',
      ],
    },
    {
      type: 'category',
      label: 'Tooling',
      items: [
        'plugins/bmad-bmb',
        'plugins/unity-project-manager',
      ],
    },
  ],
};

export default sidebars;
