<script lang="ts" setup>
import {definePageMeta} from "#imports";
import {useHead} from "#head";

// Page Settings
definePageMeta({ layout: "surface", name: "About me" })
useHead({ title: "About me | Hossein Araghi" })
</script>

<template>
  <div id="about" class="d-flex justify-content-center align-items-center" data-page>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <p>
        Hi, I'm <span>Hossein Araghi</span>. I have about <span>7 years</span> of experience in the field of <span>software development</span>, and my specialized field is <span>JVM-based software</span>, and my favorite programming language is <span>Kotlin</span>, and my favorite frameworks is <span>Nuxt.js & Spring Boot</span>. Also, due to my interest in <span>full-stack software development</span>, I mastered <span>TypeScrypt, Vue.js and NuxtJs</span> and increased my skills.      </p>
      <div class="d-flex justify-content-start align-items-center w-100">
        <RoundedButtonSmall @click="$router.push('/experiences')">My Experiences</RoundedButtonSmall>
        <RoundedButtonSmall @click="$router.push('/projects')">My projects</RoundedButtonSmall>
      </div>
    </div>
  </div>
</template>

<style scoped src="../assets/sass/pages/about.sass" lang="sass"></style>