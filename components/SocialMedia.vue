<script setup lang="ts">
defineProps<{
    title: string,
    id: string,
    link: string,
    text?: string
}>()

</script>

<template>
    <a class="socialMeida block" :href="link" target="_blank">
        <div class="bg-hs-dark rounded-[10px] p-4 hover:bg-hs-purple-dark h-[100px] flex flex-col justify-between cursor-pointer">
            <div class="flex flex-col">
                <p class="text-[30px]">{{ title }}</p>
            </div>
            <div>
                <button class="w-full flex items-center text-[12px] pr-2">
                    {{ typeof text == 'undefined' ? `Send message to @${id}` : text }}
                    <img class="ml-auto" src="../assets/img/arrow.svg" alt="arrow"/>
                </button>
            </div>
        </div>
    </a>
</template>