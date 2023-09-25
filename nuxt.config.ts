import Components from "unplugin-vue-components/vite";
import {NaiveUiResolver} from "unplugin-vue-components/resolvers";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: process.env.npm_package_name||"Site",
            htmlAttrs: {
                lang: "ru",
            },
            meta: [
                {charset: "utf-8"},
                {name: "viewport",content: "width=device-width, initial-scale=1"},
                {
                    hid: "description",
                    name: "description",
                    content: process.env.npm_package_description||"Site description",
                },
            ],
            link: [
                {rel: "icon",type: "image/x-icon",href: "/favicon.ico"},
                {rel: "stylesheet",type: "text/css",href: "/css/normalise.css"},
                {rel: "stylesheet",type: "text/css",href: "/css/fonts.css"},
                {rel: "stylesheet",type: "text/css",href: "/css/core.css"},
                {rel: "stylesheet",type: "text/css",href: "/css/mmenu-light.css"},
                {rel: "stylesheet",type: "text/css",href: "/css/swiper.min.css"},
                {rel: "stylesheet",type: "text/css",href: "/css/custom.css"},
                {rel: "stylesheet",type: "text/css",href: "/css/theme.css"},
                {rel: "stylesheet",type: "text/css",href: "/css/responsive.css"},
                {rel: "stylesheet",type: "text/css",href: "/css/responsive2.css"},
            ],
            script: [
                // {src: "/js/jquery.js",type: "text/javascript",defer: true},
                // {src: "/js/dataTabs.js",type: "text/javascript",defer: true},
                // {src: "/js/mmenu-light.js",type: "text/javascript",defer: true},
                // {src: "/js/swiper.min.js",type: "text/javascript",defer: true},
                // {src: "/js/custom.js",type: "text/javascript",defer: true},
                {src: "/js/index.js",type: "text/javascript",defer: true},
            ],
        },
    },
    modules: ["@pinia/nuxt"],
    build: {
        transpile:
            process.env.NODE_ENV==="production"
                ? ["naive-ui","vueuc","@css-render/vue3-ssr","@juggle/resize-observer"]
                :["@juggle/resize-observer"],
    },
    vite: {
        optimizeDeps: {
            include:
                process.env.NODE_ENV==="development"? ["naive-ui","vueuc","date-fns-tz/esm/formatInTimeZone"]:[],
        },
        plugins: [
            Components({
                dts: true,
                resolvers: [NaiveUiResolver()],
            }),
        ],
    },
    devtools: {enabled: true},
    runtimeConfig: {
        cookieName: process.env.COOKIE_NAME||"__session",
        cookieSecret: process.env.COOKIE_SECRET||"secret",
        cookieExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES||ONE_DAY.toString(),10), // 1 day
        cookieRememberMeExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES||ONE_WEEK.toString(),10), // 7 days
        // The private keys which are only available within server-side
        apiSecret: "123",
        // Keys within public, will be also exposed to the client-side
        public: {
            apiBase: process.env.API_URL,
        },
    },
});
