import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "熔岩动画 LavaAnime",
  description: "熔岩动画字幕信息站",
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
  },
});
