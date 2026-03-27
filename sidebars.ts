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
  modulesSidebar: [
    'modules/overview',
    {
      type: 'category',
      label: 'Core',
      items: ['modules/bmad-core'],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'modules/bmad-bmm',
        'modules/bmad-gds',
        'modules/bmad-tea',
      ],
    },
    {
      type: 'category',
      label: 'Creative & Education',
      items: [
        'modules/bmad-cis',
        'modules/bmad-edu',
      ],
    },
    {
      type: 'category',
      label: 'Tooling',
      items: [
        'modules/bmad-bmb',
        'modules/unity-project-manager',
      ],
    },
  ],
};

export default sidebars;
