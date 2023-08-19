import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

export default defineNuxtConfig({
  app: {
    head: {
      title: process.env.npm_package_name || "SCROLL",
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: process.env.npm_package_description || "Описание",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet", type: "text/css", href: "/css/vendor.min.css" },
        { rel: "stylesheet", type: "text/css", href: "/css/app.min.css" },
      ],
      script: [
        {
          src: "/js/vendor.min.js",
          type: "text/javascript",
          body: true,
          defer: true,
        },
        {
          src: "/js/app.min.js",
          type: "text/javascript",
          body: true,
          defer: true,
        },
      ],
    },
  },
  runtimeConfig: {
    cookieName: process.env.COOKIE_NAME || "__session",
    cookieSecret: process.env.COOKIE_SECRET || "secret",
    cookieExpires: parseInt(
      process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_DAY.toString(),
      10
    ), // 1 day
    cookieRememberMeExpires: parseInt(
      process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(),
      10
    ), // 7 days
    apiSecret: "123",
    public: {
      apiURL: "https://pacoswitu.beget.app/api/v1/",
      imgHost: "https://pacoswitu.beget.app/",
    },
  },
  build: {
    transpile:
      process.env.NODE_ENV === "production"
        ? [
            "naive-ui",
            "vueuc",
            "@css-render/vue3-ssr",
            "@juggle/resize-observer",
          ]
        : ["@juggle/resize-observer"],
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === "development"
          ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"]
          : [],
    },
    plugins: [
      Components({
        dts: true,
        resolvers: [NaiveUiResolver()],
      }),
    ],
  },
  modules: ["@pinia/nuxt"],
  devtools: { enabled: false },
});
