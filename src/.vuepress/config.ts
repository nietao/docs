/*
 * @Author: 聂涛
 * @Date: 2023-04-07 11:07:53
 * @LastEditors: 聂涛
 * @LastEditTime: 2023-04-07 13:55:09
 * @Description: 
 */
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/home/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
