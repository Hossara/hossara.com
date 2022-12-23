<script lang="ts" setup>
import {Projects} from "~/interfaces"

defineProps<{
  project: Projects
}>()
</script>

<template>
  <div class="productCards col-sm-6 col-md-4 col-lg-3">
    <div class="inner d-flex flex-column justify-content-center align-items-center">
      <h2 v-html="project.title"></h2>

      <p class="ps_time">{{ project.time }}</p>

      <p class="ps_upper">Position : </p>
      <p>{{ project.position }}</p>

      <p class="ps_upper">Developed with : </p>
      <p class="ps_stack">{{ project.tech_stack }}</p>

      <p class="ps_upper" v-if="project.links.length !== 0">Links : </p>
      <div v-if="project.links.length !== 0" class="d-flex justify-content-center align-items-center">
        <a v-for="link in project.links" :key="link" target="_blank"
           :href="link.url" class="fa" :class="`fa-${link.type}`"></a>
      </div>
    </div>
  </div>
</template>

<style src="../assets/sass/widget/projectsCard.sass" lang="sass" scoped></style>