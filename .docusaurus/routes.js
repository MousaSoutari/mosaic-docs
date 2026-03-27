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
    component: ComponentCreator('/mosaic-docs/docs', '2d8'),
    routes: [
      {
        path: '/mosaic-docs/docs',
        component: ComponentCreator('/mosaic-docs/docs', 'e69'),
        routes: [
          {
            path: '/mosaic-docs/docs',
            component: ComponentCreator('/mosaic-docs/docs', 'af5'),
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
                path: '/mosaic-docs/docs/modules/bmad-bmb',
                component: ComponentCreator('/mosaic-docs/docs/modules/bmad-bmb', 'b7e'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/mosaic-docs/docs/modules/bmad-bmm',
                component: ComponentCreator('/mosaic-docs/docs/modules/bmad-bmm', '4ad'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/mosaic-docs/docs/modules/bmad-cis',
                component: ComponentCreator('/mosaic-docs/docs/modules/bmad-cis', '25b'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/mosaic-docs/docs/modules/bmad-core',
                component: ComponentCreator('/mosaic-docs/docs/modules/bmad-core', '809'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/mosaic-docs/docs/modules/bmad-edu',
                component: ComponentCreator('/mosaic-docs/docs/modules/bmad-edu', 'ad0'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/mosaic-docs/docs/modules/bmad-gds',
                component: ComponentCreator('/mosaic-docs/docs/modules/bmad-gds', '11e'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/mosaic-docs/docs/modules/bmad-tea',
                component: ComponentCreator('/mosaic-docs/docs/modules/bmad-tea', '0cb'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/mosaic-docs/docs/modules/overview',
                component: ComponentCreator('/mosaic-docs/docs/modules/overview', 'f3b'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/mosaic-docs/docs/modules/unity-project-manager',
                component: ComponentCreator('/mosaic-docs/docs/modules/unity-project-manager', '2e9'),
                exact: true,
                sidebar: "modulesSidebar"
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
