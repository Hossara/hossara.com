<script lang="ts" setup>
import {isMenuOpen} from "#imports"

const config = useRuntimeConfig()

const telegram = useState(() => `${config.public.TELEGRAM}`)
const instagram = useState(() => `${config.public.INSTAGRAM}`)
const linked = useState(() => `${config.public.LINKED_IN}`)
const github = useState(() => `${config.public.GITHUB}`)
const blog = useState(() => `${config.public.BLOG}`)
const mailto = useState(() => `mailto:${config.public.EMAIL}`)
</script>

<template>
  <div class="mobileMenu -z-50 opacity-0 bg-menu_bg backdrop-blur-[12.5px] fixed top-0 left-0 right-0 bottom-0 overflow-auto py-[40px] px-[20px]" 
  :class="{ '!z-50 !opacity-100' : isMenuOpen().value }">

    <div class="header flex items-center justify-between w-full pb-[40px] border-b-[1px] border-[#494949]">

      <h1 class="text-[20px] font-bold">Hossein Araghi</h1>
      <img src="~/assets/img/close.svg" alt="close" @click="isMenuOpen().value = false">
    </div>

    <div class="body">
      <MobileMenuItem to="home" title="Home"/>
      <MobileMenuItem to="services" title="Services"/>
      <MobileMenuItem to="contact" title="Contact me"/>
      <MobileMenuItem :to="blog" title="Blog" link/>
    </div>

    <div class="footer flex justify-start items-center pt-[40px] border-t-[1px] border-[#494949]">
      <a target="_blank" :href="mailto" class="fa fa-envelope mobileMenu_style"></a>
      <a target="_blank" :href="instagram" class="fa fa-instagram mobileMenu_style"></a>
      <a target="_blank" :href="linked" class="fa fa-linkedin-square mobileMenu_style"></a>
      <a target="_blank" :href="github" class="fa fa-github mobileMenu_style"></a>
      <a target="_blank" :href="telegram" class="fa fa-telegram mobileMenu_style"></a>
    </div>
  </div>
</template>

<style scoped>
.mobileMenu_style {
  @apply text-white font-[20px] mx-[10px];
}
</style>
