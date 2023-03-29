<script setup lang="ts">
defineProps<{
    active?: boolean,
    small?: boolean,
    disabled?: boolean
}>()
</script>

<template>
    <div class="buttonLink">
        <button class="bg-hs-dark w-full py-[12px] px-[26px] rounded-[10px] flex items-center text-[24px] [&:not(:disabled):hover]:bg-hs-purple disabled:opacity-40"
            :class="{ '!bg-hs-purple': active, '!text-[18px] !py-[10px] !px-[14px]': small }" :disabled="disabled">
            <slot/>
            <img class="ml-auto" src="../assets/img/arrow.svg" alt="arrow"/>
        </button>
    </div>
</template>

<style>
</style>