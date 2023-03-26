<script lang="ts" setup>
defineProps<{
  placeholder?: string,
  type?: string,
  required?: boolean
}>()
</script>

<template>
  <div class="textInput">
    <input :placeholder="placeholder" :type="type ? type : 'text'" :required="required"
      class="p-2 rounded-[10px] bg-hs-dark w-full !outline-none border-[1.5px] border-hs-dark focus:border-hs-purple !shadow-none">
  </div>
</template>

<style scoped></style>
