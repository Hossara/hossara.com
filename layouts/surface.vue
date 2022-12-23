<script lang="ts" setup>
import {loadFull} from "tsparticles"
import {ref} from "#imports"

const particlesInit = ref(async (engine: any) =>
{
  await loadFull(engine)
})
</script>

<template>
  <main data-surface class="d-flex flex-column">
    <LayoutHeader/>
    <client-only>
      <Particles
          id="particles"
          :options="{
      fpsLimit: 120,
      background: {
        color: '#232741'
      },
      particles: {
        color: { value: '#fff' },
        move: {
          direction: 'none',
          enable: true,
          outModes: 'out',
          random: false,
          speed: 1,
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
    }" :particlesInit="particlesInit"/>
    </client-only>
    <slot/>
    <LayoutFooter/>
  </main>
</template>

<style scoped>

</style>