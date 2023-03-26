/** @type {import('tailwindcss').Config} */
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
      extend: {
        fontFamily: {
          quicksand: ["Quicksand", "sans-serif"]
        },
        colors: {
          "hs-purple": "#646cff",
          "hs-purple-dark": "#535bf2;",
          "hs-black": "#242424",
          "hs-dark": "#414141"
        }
      },
    },
    plugins: [],
}