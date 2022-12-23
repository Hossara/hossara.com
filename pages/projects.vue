<script lang="ts" setup>
import {definePageMeta, onMounted} from "#imports"
import {useHead} from "#head"
import {useAsyncData, useFetch, useNuxtApp, useState} from "#app";
import {Projects} from "~/interfaces"
// Page Settings
definePageMeta({ layout: "surface", name: "Projects" })
useHead({ title: "My Projects | Hossein Araghi" })

const { data, pending } = await useAsyncData('projects', () => $fetch('/api/projects'))
</script>

<template>
  <div id="projects" class="d-flex justify-content-center align-items-center text-white" data-page>
    <LoadingWidget v-if="pending"/>

    <p class="mb-0" v-else-if="data.length === 0">No Projects Found!</p>

    <div class="row m-0 w-100 justify-content-center" v-else>
      <ProjectsCard v-for="project in data" :key="project" :project="project"/>
    </div>
  </div>
</template>

<style lang="sass" scoped>
#projects
  height: 100%

  @media screen and (max-width: 900px)
    overflow: hidden!important

  > div
    height: 100%
    max-width: 1600px
    border-radius: 15px

    @media screen and (max-width: 900px)
      overflow-y: scroll!important
</style>