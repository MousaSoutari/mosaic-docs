import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/mosaic-docs/markdown-page',
    component: ComponentCreator('/mosaic-docs/markdown-page', 'b1a'),
    exact: true
  },
  {
    path: '/mosaic-docs/docs',
    component: ComponentCreator('/mosaic-docs/docs', '735'),
    routes: [
      {
        path: '/mosaic-docs/docs',
        component: ComponentCreator('/mosaic-docs/docs', '013'),
        routes: [
          {
            path: '/mosaic-docs/docs',
            component: ComponentCreator('/mosaic-docs/docs', 'bfd'),
            routes: [
              {
                path: '/mosaic-docs/docs/',
                component: ComponentCreator('/mosaic-docs/docs/', '06f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mosaic-docs/docs/concepts/agents',
                component: ComponentCreator('/mosaic-docs/docs/concepts/agents', 'dca'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mosaic-docs/docs/concepts/commands',
                component: ComponentCreator('/mosaic-docs/docs/concepts/commands', 'dee'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mosaic-docs/docs/concepts/workflows',
                component: ComponentCreator('/mosaic-docs/docs/concepts/workflows', '4a4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mosaic-docs/docs/getting-started/architecture',
                component: ComponentCreator('/mosaic-docs/docs/getting-started/architecture', '61b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mosaic-docs/docs/getting-started/installation',
                component: ComponentCreator('/mosaic-docs/docs/getting-started/installation', 'b6d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mosaic-docs/docs/getting-started/quick-start',
                component: ComponentCreator('/mosaic-docs/docs/getting-started/quick-start', '03b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mosaic-docs/docs/plugins/bmad-bmb',
                component: ComponentCreator('/mosaic-docs/docs/plugins/bmad-bmb', '279'),
                exact: true,
                sidebar: "pluginsSidebar"
              },
              {
                path: '/mosaic-docs/docs/plugins/bmad-bmm',
                component: ComponentCreator('/mosaic-docs/docs/plugins/bmad-bmm', '817'),
                exact: true,
                sidebar: "pluginsSidebar"
              },
              {
                path: '/mosaic-docs/docs/plugins/bmad-cis',
                component: ComponentCreator('/mosaic-docs/docs/plugins/bmad-cis', '08a'),
                exact: true,
                sidebar: "pluginsSidebar"
              },
              {
                path: '/mosaic-docs/docs/plugins/bmad-core',
                component: ComponentCreator('/mosaic-docs/docs/plugins/bmad-core', '107'),
                exact: true,
                sidebar: "pluginsSidebar"
              },
              {
                path: '/mosaic-docs/docs/plugins/bmad-edu',
                component: ComponentCreator('/mosaic-docs/docs/plugins/bmad-edu', '590'),
                exact: true,
                sidebar: "pluginsSidebar"
              },
              {
                path: '/mosaic-docs/docs/plugins/bmad-gds',
                component: ComponentCreator('/mosaic-docs/docs/plugins/bmad-gds', 'b1c'),
                exact: true,
                sidebar: "pluginsSidebar"
              },
              {
                path: '/mosaic-docs/docs/plugins/bmad-tea',
                component: ComponentCreator('/mosaic-docs/docs/plugins/bmad-tea', '168'),
                exact: true,
                sidebar: "pluginsSidebar"
              },
              {
                path: '/mosaic-docs/docs/plugins/overview',
                component: ComponentCreator('/mosaic-docs/docs/plugins/overview', '6ce'),
                exact: true,
                sidebar: "pluginsSidebar"
              },
              {
                path: '/mosaic-docs/docs/plugins/unity-project-manager',
                component: ComponentCreator('/mosaic-docs/docs/plugins/unity-project-manager', '851'),
                exact: true,
                sidebar: "pluginsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/mosaic-docs/',
    component: ComponentCreator('/mosaic-docs/', '42f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
