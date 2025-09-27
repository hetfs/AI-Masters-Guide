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
    component: ComponentCreator('/AI-Masters-Guide/docs', 'a99'),
    routes: [
      {
        path: '/AI-Masters-Guide/docs',
        component: ComponentCreator('/AI-Masters-Guide/docs', '420'),
        routes: [
          {
            path: '/AI-Masters-Guide/docs',
            component: ComponentCreator('/AI-Masters-Guide/docs', 'ed5'),
            routes: [
              {
                path: '/AI-Masters-Guide/docs/category/python-basics',
                component: ComponentCreator('/AI-Masters-Guide/docs/category/python-basics', 'ce5'),
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
                path: '/AI-Masters-Guide/docs/python/basics/introduction',
                component: ComponentCreator('/AI-Masters-Guide/docs/python/basics/introduction', '598'),
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
