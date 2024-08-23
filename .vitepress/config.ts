import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

const nav = (_lang, index) => [
  {
    text: ['Discussions', '討論', '', '讨论'][index],
    link: 'https://github.com/iBz-04/GeoLib/discussions',
  },
]

const sidebar = (lang, index) => [
  {
    text: ['Getting Started', '入門', 'はじめに', 'Başla'][index],
    collapsible: true,
    items: [
      {
        text: ['Intro', '介紹', '紹介', 'Tanıtım'][index],
        link: lang + 'getting-started/intro',
      },
      {
        text: ['Quick Start', '快速開始', 'クイックスタート', 'Hızlı Başlangıç'][
          index
        ],
        link: lang + 'getting-started/quick-start',
      },
      {
        text: ['Configuration', '配置', '設定', 'Yapılandırma'][index],
        link: lang + 'getting-started/configuration',
      },
      {
        text: ['Writing', '寫作', '文章を書く', 'Yazma'][index],
        link: lang + 'getting-started/writing',
      },
      {
        text: ['Next steps', '部署', '配備', 'Sonraki Adımlar'][index],
        link: lang + 'getting-started/deploy',
      },
    ],
  },
  {
    text: ['More', '進階', '高度な', 'Daha Fazla'][index],
    collapsible: true,
    items: [
      {
        text: ['Credits', '拓展', '拡張', 'Krediler'][index],
        link: lang + 'advanced/extension',
      },
    ],
  },
]

const themeConfig = (lang, index) => ({
  sidebar: sidebar(lang, index),
  nav: nav(lang, index),
  editLink: {
    pattern: 'https://github.com/iBz-04/Geo-Lib-Docs/edit/main/:path',
    text: [
      'Edit on GitHub',
      '在 GitHub 上編輯',
      'GitHub でこのページを編集',
      'GitHubda Düzenle',
    ][index],
  },
  lastUpdatedText: ['Last Updated', '最後更新于', '最終更新', 'Son Güncelleme'][
    index
  ],
})

export default withPwa(
  defineConfig({
    title: 'Geolib Docs',
    head: [
      [
        'link',
        {
          rel: 'icon',
          href: '/favicon.png',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
      [
        'script',
        {
          src: 'https://plausible.kwaa.dev/js/plausible.js',
          defer: '',
          'data-domain': 'urara-docs.netlify.app',
        },
      ],
    ],
    description: 'A geometry library built with python.',
    markdown: { lineNumbers: true },
    locales: {
      root: {
        lang: 'en-US',
        label: 'English',
        themeConfig: themeConfig('/', 0),
      },
      zh: {
        lang: 'zh-TW',
        label: '正體中文',
        themeConfig: themeConfig('/zh/', 1),
      },
      // ja: { lang: 'ja-JP', label: '日本語', themeConfig: themeConfig('/ja/', 2) }
      'zh-hans': {
        lang: 'tr',
        label: 'Türkçe',
        themeConfig: themeConfig('/zh-hans/', 3),
      },
    },
    themeConfig: {
      socialLinks: [
        { icon: 'github', link: 'https://github.com/iBz-04/GeoLib' },
      ],
    },
    pwa: {
      manifest: {
        name: 'Geolib',
        short_name: 'Geolib',
        description: 'A geometry library built with python',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'assets/any@192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/any@512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'assets/maskable@192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'assets/maskable@512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    },
  })
)
