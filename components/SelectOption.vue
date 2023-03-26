<script lang="ts" setup>
defineProps<{
  required?: boolean
}>()
</script>

<template>
  <div>
    <select :required="required"
      class="p-2 rounded-[10px] bg-hs-dark w-full !outline-none border-[1.5px] border-hs-dark focus:border-hs-purple !shadow-none select">
      <slot/>
    </select>
  </div>
</template>

<style scoped></style>
