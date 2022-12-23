<script lang="ts" setup>
import {isMenuOpen} from "#imports"

defineProps<{
  to: string,
  title: string
}>()
</script>

<template>
  <div class="mobileMenuItem d-flex align-items-center justify-content-start"
       @click="isMenuOpen().value = false" :class="{ ac : $route.path === to }">
    <div class="line"></div>
    <NuxtLink :to="to">{{ title }}</NuxtLink>
  </div>
</template>

<style scoped src="../../assets/sass/widget/mobileMenuItem.sass" lang="sass"></style>