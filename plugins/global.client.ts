import {defineNuxtPlugin} from "#app";

export default defineNuxtPlugin(() =>
{
    return {
        provide: {
            api: (url: String) =>
            {
                const sec = window.location.origin.split(":")
                return `${sec[0]}:${sec[1]}:8080/api${url}`
            }
        }
    }
})