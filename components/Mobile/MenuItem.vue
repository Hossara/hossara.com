<script lang="ts" setup>
import { isMenuOpen } from '#imports'

const props = defineProps<{
  to: string,
  title: string,
  link?: boolean
}>()

const goto = (id: string) =>
{ 
  if(props.link)
  {
    isMenuOpen().value = false
    window.open(props.to, "_blank")
  }
  else
  {
    isMenuOpen().value = false
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"})
  }
}
</script>

<template>
  <div class="mobileMenuItem py-[20px] flex items-center justify-start"
       @click="goto(to)">
    <NuxtLink class="text-white font-medium text-[18px] ml-2">{{ title }}</NuxtLink>
  </div>
</template>