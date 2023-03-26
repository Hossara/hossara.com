<script setup lang="ts">
const config = useRuntimeConfig()

const linked = useState(() => `${config.public.LINKED_IN}`)
</script>

<template>
    <div class="seeMore">
        <div class="rounded-[15px] max-h-[400px] h-full bg-hs-dark text-white flex flex-col">
            <img src="../assets/img/banner/linkedin.jpg" alt="See more on Linkedin" class="rounded-[15px]">

            <div class="p-3 flex flex-col justify-between h-full">
                <h2 class="text-xl mb-2 font-bold">See more on Linkedin</h2>

                <a :href="linked" target="_blank">
                    <button class="w-full rounded-[10px] flex items-center text-[12px] hover:bg-hs-purple-dark hover:p-2">
                        See more on Linkedin
                        <img class="ml-auto" src="../assets/img/arrow.svg" alt="arrow"/>
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>