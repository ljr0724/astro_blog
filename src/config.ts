export const SITE = {
  website: "https://ljr0724.github.io/astro_blog/",
  author: "Lirio",
  desc: "个人博客",
  title: "Lirio's ink",
  ogImage: "og.png",
  profile: "https://github.com/ljr0724",
  lang: "zh-cn",
  dir: "ltr",
  lightAndDarkMode: true,
  postPerPage: 8,
  showArchives: true,
  showBackButton: true,
  scheduledPostMargin: 15 * 60 * 1000,
  dynamicOgImage: false,
  disableFontOptimization: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog/",
  },
};

export const LOCALE = {
  lang: "zh-cn",
  langTag: ["zh-CN"],
} as const;