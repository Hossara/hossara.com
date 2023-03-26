<script setup lang="ts">
defineProps<{
    banner: string,
    title: string,
    description: string
}>()
</script>

<template>
    <div class="serviceCard">
        <div class="rounded-[15px] max-h-[400px] h-full bg-hs-dark hover:bg-hs-purple-dark text-white">
            <img :src="banner" :alt="title" class="rounded-[15px]">

            <div class="p-3">
                <h2 class="text-xl mb-2 font-bold">{{ title }}</h2>

                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>