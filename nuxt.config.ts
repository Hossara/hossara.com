// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/css/main.css',
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
        }
    }
})
