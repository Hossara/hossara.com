// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/css/main.css',
        "font-awesome/css/font-awesome.min.css"
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    },
    buildModules: [
        '@nuxtjs/google-fonts' 
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
            BLOG: process.env.BLOG
        }
    }
})
