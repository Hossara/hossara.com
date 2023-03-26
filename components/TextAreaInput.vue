<script lang="ts" setup>
defineProps<{
  placeholder?: string,
  required?: boolean
}>()
</script>

<template>
  <div class="textAreaInput">
    <textarea :placeholder="placeholder" :required="required"
        class="p-2 rounded-[10px] bg-hs-dark w-full !outline-none border-[1.5px] border-hs-dark focus:border-hs-purple !shadow-none resize-none h-[200px]"
    ></textarea>
  </div>
</template>

<style scoped></style>
