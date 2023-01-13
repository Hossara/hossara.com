<script lang="ts" setup>
import {definePageMeta} from "#imports"
import {useHead} from "#head";

// Page Settings
definePageMeta({ layout: "surface", name: "Home" })
useHead({ title: "Hossein Araghi" })
</script>

<template>
  <div id="home" class="d-flex justify-content-center align-items-center" data-page>
    <div class="d-flex justify-content-between align-items-center flex-wrap">
      <div class="content">
        <h1>Hi! I’m Hossein Araghi</h1>
        <h3>Software engineer</h3>
        <div class="d-flex align-items-center justify-content-start">
          <WhiteButton @click="$router.push('/about')">About Me</WhiteButton>
          <RoundedButton>Visit My Blog</RoundedButton>
        </div>
      </div>
      <div class="pf_pic"></div>
    </div>
  </div>
</template>

<style scoped lang="sass" src="../assets/sass/pages/home.sass"></style>