import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/vue3-tailwind3-cookie-comply/',

  lang: 'en-US',
  title: 'Vue 3 Cookie Comply',
  description:
    'A Vue 3 compatible component to handle cookie consent styled with Tailwind CSS 3.',
  lastUpdated: true,

  themeConfig: {
    sidebar: {
      '/guide/': sidebarRoot(),
    },

    editLink: {
      pattern:
        'https://github.com/iPaat/vue3-tailwind3-cookie-comply/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/iPaat/vue3-tailwind3-cookie-comply',
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present iPaat',
    },
  },
});

function sidebarRoot() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is this?', link: '/guide/what-is' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Events', link: '/guide/events' },
        { text: 'Customize', link: '/guide/customize' },
      ],
    },
  ];
}
