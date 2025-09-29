import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/AI-Masters-Guide/__docusaurus/debug',
    component: ComponentCreator('/AI-Masters-Guide/__docusaurus/debug', '6d6'),
    exact: true
  },
  {
    path: '/AI-Masters-Guide/__docusaurus/debug/config',
    component: ComponentCreator('/AI-Masters-Guide/__docusaurus/debug/config', '3cb'),
    exact: true
  },
  {
    path: '/AI-Masters-Guide/__docusaurus/debug/content',
    component: ComponentCreator('/AI-Masters-Guide/__docusaurus/debug/content', 'ee0'),
    exact: true
  },
  {
    path: '/AI-Masters-Guide/__docusaurus/debug/globalData',
    component: ComponentCreator('/AI-Masters-Guide/__docusaurus/debug/globalData', 'ad8'),
    exact: true
  },
  {
    path: '/AI-Masters-Guide/__docusaurus/debug/metadata',
    component: ComponentCreator('/AI-Masters-Guide/__docusaurus/debug/metadata', 'e85'),
    exact: true
  },
  {
    path: '/AI-Masters-Guide/__docusaurus/debug/registry',
    component: ComponentCreator('/AI-Masters-Guide/__docusaurus/debug/registry', '1a7'),
    exact: true
  },
  {
    path: '/AI-Masters-Guide/__docusaurus/debug/routes',
    component: ComponentCreator('/AI-Masters-Guide/__docusaurus/debug/routes', '447'),
    exact: true
  },
  {
    path: '/AI-Masters-Guide/docs',
    component: ComponentCreator('/AI-Masters-Guide/docs', 'ad5'),
    routes: [
      {
        path: '/AI-Masters-Guide/docs',
        component: ComponentCreator('/AI-Masters-Guide/docs', 'c94'),
        routes: [
          {
            path: '/AI-Masters-Guide/docs',
            component: ComponentCreator('/AI-Masters-Guide/docs', '0e9'),
            routes: [
              {
                path: '/AI-Masters-Guide/docs/category/-python-basics',
                component: ComponentCreator('/AI-Masters-Guide/docs/category/-python-basics', 'b70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Masters-Guide/docs/category/-python-env-config',
                component: ComponentCreator('/AI-Masters-Guide/docs/category/-python-env-config', '9f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Masters-Guide/docs/enviromment/01-python-env-config',
                component: ComponentCreator('/AI-Masters-Guide/docs/enviromment/01-python-env-config', '080'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Masters-Guide/docs/enviromment/02-package-manager',
                component: ComponentCreator('/AI-Masters-Guide/docs/enviromment/02-package-manager', '895'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Masters-Guide/docs/enviromment/03-code-quality-tools',
                component: ComponentCreator('/AI-Masters-Guide/docs/enviromment/03-code-quality-tools', 'd55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Masters-Guide/docs/enviromment/04-windows-config',
                component: ComponentCreator('/AI-Masters-Guide/docs/enviromment/04-windows-config', '5d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Masters-Guide/docs/enviromment/05-macOS-config',
                component: ComponentCreator('/AI-Masters-Guide/docs/enviromment/05-macOS-config', '7ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Masters-Guide/docs/enviromment/06-lunix-config',
                component: ComponentCreator('/AI-Masters-Guide/docs/enviromment/06-lunix-config', '77e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Masters-Guide/docs/intro',
                component: ComponentCreator('/AI-Masters-Guide/docs/intro', 'cc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Masters-Guide/docs/python/basics/01-programming',
                component: ComponentCreator('/AI-Masters-Guide/docs/python/basics/01-programming', 'ef3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Masters-Guide/docs/python/basics/02-what-is-python',
                component: ComponentCreator('/AI-Masters-Guide/docs/python/basics/02-what-is-python', '731'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/AI-Masters-Guide/',
    component: ComponentCreator('/AI-Masters-Guide/', '27b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
