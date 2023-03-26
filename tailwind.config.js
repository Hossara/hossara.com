/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue"
    ],
    theme: {
      screens: {
        'se_sm': "1155px",
        'mobile': "865px",
        ...defaultTheme.screens
      },
      extend: {
        fontFamily: {
          quicksand: ["Quicksand", "sans-serif"]
        },
        colors: {
          "hs-purple": "#646cff",
          "hs-purple-dark": "#535bf2",
          "hs-black": "#242424",
          "hs-dark": "#414141"
        }
      }
    },
    plugins: [],
}