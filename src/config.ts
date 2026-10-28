import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  // GitHub Pages root site. Replace with a custom domain only after DNS and HTTPS are live.
  website: 'https://zby-123-coder.github.io/',
  base: '/',
  title: '赵博洋 · AI 产品 / Agent',
  description: '赵博洋的 AI 产品、Agent 系统、项目档案与工作随笔。',
  socialImage: '/og/zhaoboyang.svg',
  socialImageAlt: '赵博洋 · AI 产品 / Agent',
  author: '赵博洋',
  lang: 'zh-CN',
  imageDomains: [],
}

export const GISCUS = {
  // Create a GitHub Discussions-enabled repository first, then fill these in.
  repo: 'zby-123-coder/zby-personal-site',
  repoId: '',
  category: 'General',
  categoryId: '',
}

// Avoid sending readers to an unconfigured third-party comment system.
export const COMMENTS_ENABLED = false

export const AUTHOR_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/zby-123-coder',
    icon: 'i-uil-github-alt',
  },
]

export const MORE_LINKS = [
  {
    title: 'GitHub',
    description: '公开代码与项目索引',
    href: 'https://github.com/zby-123-coder',
    icon: 'i-uil-github-alt',
    external: true,
  },
]

export const UI: Ui = {
  internalNavs: [
    {
      path: '/blogs/',
      title: '随笔',
      displayMode: 'alwaysText',
      text: '随笔',
    },
    {
      path: '/tags',
      title: '标签',
      displayMode: 'alwaysText',
      text: '标签',
    },
    {
      path: '/archives',
      title: '归档',
      displayMode: 'alwaysText',
      text: '归档',
    },
    {
      path: '/interests/',
      title: '生活',
      displayMode: 'alwaysText',
      text: '生活',
    },
    {
      path: '/projects',
      title: '项目',
      displayMode: 'alwaysText',
      text: '项目',
    },
    {
      path: '/about',
      title: '关于',
      displayMode: 'alwaysText',
      text: '关于',
    },
  ],
  socialLinks: [
    {
      link: 'https://github.com/zby-123-coder',
      title: 'GitHub',
      displayMode: 'alwaysIcon',
      icon: 'i-uil-github-alt',
    },
  ],
  navBarLayout: {
    left: ['internalNavs'],
    right: ['socialLinks', 'searchButton', 'accentButton', 'themeButton'],
  },
  postView: {
    postMetaStyle: 'minimal',
  },
  groupView: {
    showGroupItemColorOnHover: true,
  },
  externalLink: {
    newTab: false,
    cursorType: '',
    showNewTabIcon: false,
  },
}

/**
 * Globally controls whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  slideEnterAnim: [true, { enterStep: 60 }],
  toc: [
    true,
    {
      minHeadingLevel: 1,
      maxHeadingLevel: 4,
      displayPosition: 'right',
    },
  ],
  search: [
    true,
    {
      includes: ['blogs'],
      filter: false,
      navHighlight: true,
      batchLoadSize: [true, 5],
      maxItemsPerPage: [true, 3],
    },
  ],
  // Keep third-party executable widgets disabled in the public release.
  oneko: false,
}

/** Dropdown icons also feed UnoCSS's dynamic-class safelist. */
export const INTEREST_ICONS: Record<string, string> = {
  'field-notes': 'i-ri-camera-lens-line',
  'games': 'i-ri-gamepad-line',
  'reading': 'i-ri-book-open-line',
  'tools': 'i-ri-tools-line',
}
