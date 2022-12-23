<script lang="ts" setup>
import {isMenuOpen} from "#imports"

const website_links = [
  { title : "Home", url : "/" },
  { title : "About me", url : "/about" },
  { title : "Projects", url : "/projects" },
  { title : "Experiences", url : "/experiences" },
  { title : "Certificates", url : "/certificates" }
]
</script>

<template>
  <div class="mobileMenu" :class="{ showMenu : isMenuOpen().value }">
    <div class="header d-flex align-items-center justify-content-between w-100">
      <img src="~/assets/img/brand/logo.svg" alt="Hossara.com">
      <img src="~/assets/img/icons/icon_close_gray.svg" alt="close" @click="isMenuOpen().value = false">
    </div>

    <div class="body">
      <MobileMenuItem v-for="page in website_links" :key="page" :to="page.url" :title="page.title"/>
    </div>

    <div class="footer d-flex justify-content-start align-items-center">
      <a target="_blank" href="mailto:hoseinaraghi84@gmail.com" class="fa fa-envelope"></a>
      <a target="_blank" href="https://instagram.com/hossara.dev" class="fa fa-instagram"></a>
      <a target="_blank" href="https://linkedin.com/in/hossara" class="fa fa-linkedin-square"></a>
      <a target="_blank" href="https://github.com/Hossara" class="fa fa-github"></a>
    </div>
  </div>
</template>

<style scoped src="../../assets/sass/widget/mobileMenu.sass" lang="sass"></style>