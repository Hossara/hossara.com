import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify'
import { toast } from 'vue3-toastify'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Vue3Toasity, {
        autoClose: 3000,
        position: "bottom-left",
        theme: 'dark'
    } as ToastContainerOptions)

    return {
        provide: {
            showToast: toast
        }
    }
})
