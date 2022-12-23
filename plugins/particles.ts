import Particles from "particles.vue3"
import {defineNuxtPlugin} from "#app"

export default defineNuxtPlugin((nuxtApp) => nuxtApp.vueApp.use(Particles))