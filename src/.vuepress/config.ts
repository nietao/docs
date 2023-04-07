/*
 * @Author: 聂涛
 * @Date: 2023-04-07 11:07:53
 * @LastEditors: 聂涛
 * @LastEditTime: 2023-04-07 15:39:19
 * @Description: 
 */
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/docs/",
  locales: {
    "/": {
      title: "一位坚定的共产主义战士",
      description: "我叫小埋，埋人的埋",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
