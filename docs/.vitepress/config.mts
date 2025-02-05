import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "熔岩动画 LavaAnime",
  description: "熔岩动画字幕信息站",
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "简介", link: "/" },
      { text: "作品列表", link: "/list" },
    ],

    sidebar: [
      {
        text: "关于",
        items: [
          { text: "关于熔岩动画", link: "/" },
          {
            text: "制作流程",
            link: "/how",
          },
          {
            text: "反馈交流",
            link: "/chat",
          },
        ],
      },
      {
        text: "功能界面",
        items: [
          { text: "作品列表", link: "/list" },
          { text: "分流 & 网盘下载", link: "/pan" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/LavaAnimeSub" }],

    // 以下抄自 https://github.com/vuejs/vitepress/blob/main/docs/.vitepress/config/zh.ts

    editLink: {
      pattern:
        "https://github.com/LavaAnimeSub/LavaAnimeSub/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    skipToContentLabel: "跳转到内容",
  },
});
