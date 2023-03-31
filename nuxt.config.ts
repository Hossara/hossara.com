import pkg from './package.json'

export default defineNuxtConfig({
    modules: [
        "nuxt-csurf",
        "nuxt-schema-org",
        "nuxt-simple-sitemap",
        "@nuxtjs/robots"
    ],
    css: [
        "@/assets/css/main.css",
        "font-awesome/css/font-awesome.min.css"
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    },
    buildModules: [
        "@nuxtjs/google-fonts"
    ],
    googleFonts: {
        inject: true,
        families: {
            Quicksand: true
        }
    },
    runtimeConfig: {
        public: {
            EMAIL: process.env.EMAIL,
            LINKED_IN: process.env.LINKEDIN,
            TELEGRAM: process.env.TELEGRAM,
            INSTAGRAM: process.env.INSTAGRAM,
            GITHUB: process.env.GITHUB,
            REPO: process.env.REPO,
            BLOG: process.env.BLOG,
            version: pkg.version
        }
    },
    csurf: { 
        https: false,
        cookieKey: "",
        cookie: {
            path: "/",
            httpOnly: true,
            sameSite: "strict"
        },
        methodsToProtect: ["POST", "PUT", "PATCH"], 
        encryptAlgorithm: "aes-256-cbc"
    },
    schemaOrg: {
        host: "https://hossara.com"
    },
    sitemap: {
        siteUrl: "https://hossara.com"
    }
})
