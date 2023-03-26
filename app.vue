<script setup lang="ts">
import { Service } from './interfaces';

useHead({ title: "Hossein Araghi" })

const config = useRuntimeConfig()

const linked = useState(() => `${config.public.LINKED_IN}`)
const telegram = useState(() => `${config.public.TELEGRAM}`)
const mailto = useState(() => `mailto:${config.public.EMAIL}?subject=Hiring%20Hossein%20Araghi`)

const goto = (id: string) => document.getElementById(id)?.scrollIntoView({behavior: "smooth"}) 
const isScroll = useState(() => false)

const top = computed({
  get: () => isScroll.value,
  set: (value: boolean) => isScroll.value = value
})

function onScroll() { top.value = window.top!.scrollY > 0 }

onMounted(() => window.addEventListener("scroll", onScroll))
onUnmounted(() => window.addEventListener("scroll", onScroll))

// Services
import frontend from "~/assets/img/banner/frontend.jpg"
import backend from "~/assets/img/banner/backend.jpg"
import devops from "~/assets/img/banner/devops.jpg"
import mobile from "~/assets/img/banner/mobile.jpg"

const services: Ref<Service[]> = useState(() => [
  {
    image: frontend,
    title: "Frontend",
    description: "Developing high performance and user friendly frontend with technologies like Nuxt.js, Vue.js and Tailwind."
  },
  {
    image: backend,
    title: "Backend",
    description: "Developing highly scalable and microservice backend with Spring boot, FastApi and Node.js"
  },
  {
    image: devops,
    title: "DevOps",
    description: "Deploying applications using docker and docker swarm and automate oprations using CircleCI and Github Actions."
  },
  {
    image: mobile,
    title: "Cross-platform apps",
    description: "Developing cross-platform mobile and desktop applications using flutter."
  }
])
</script>

<template>
  <div id="index">
    <button class="fixed bottom-4 right-4 bg-hs-dark w-[50px] h-[50px] flex justify-center items-center rounded-full hover:bg-hs-purple shadow-md
          opacity-0 -z-30" :class="{ 'opacity-100 z-50': top }" @click="goto('home')">
      <img src="./assets/img/arrow2.svg" alt="top">
    </button>

    <header class="flex justify-center items-center p-5 pt-7 h-[76px]" 
      :class="{ 'fixed top-0 left-0 right-0 !p-0 h-[60px] z-40 bg-black/60' : top }">
      <NuxtLink @click="goto('home')" class="menu-item">Home</NuxtLink>
      <NuxtLink @click="goto('services')" class="menu-item">Services</NuxtLink>
      <NuxtLink @click="goto('resume')" class="menu-item">Resume</NuxtLink>
      <NuxtLink to="#home" class="menu-item">Contact me</NuxtLink>
    </header>

    <section id="home" class="h-[calc(100vh_-_76px)] flex items-center max-w-[80%] w-full m-auto">
      <div class="h-[40%] w-full flex justify-center items-center">
        <div class="h-full flex bg-white aspect-square rounded-[40px] rotate-45 relative items-center overflow-hidden shadow-[-40px_-40px_140px] shadow-hs-purple">
          <img src="./assets/img/h_full.png" class="rotate-[-45deg] absolute left-[-5px]" alt="Hossein Araghi">
        </div>
      </div>
      <div class="w-full flex justify-center items-center pb-4">
        <div class="flex flex-col">
          <p class="text-[56px] font-medium">Hello, I'm a</p>
          <p class="text-[56px] font-bold">Full-stack developer</p>
          <p class="text-[48px] font-medium">Hossein Araghi</p>
          
          <div class="mt-[60px] max-w-[522px] w-full">
            <div class="flex">
              <a :href="mailto" class="w-full pr-[10px]"><ButtonLink active>Hire me</ButtonLink></a>
              <a :href="linked" class="w-full pl-[10px]" target="_blank"><ButtonLink>Portfolio</ButtonLink></a>
            </div>
            <a :href="telegram" class="block mt-[20px]">
              <ButtonLink>
                <img src="./assets/img/telegram.svg" class="mr-[20px] w-[24px]" alt="telegram"> Get in touch by Telegram
              </ButtonLink>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="h-screen flex justify-center items-center">
      <div class="w-[55%]">
        <h1 class="p-2 title">Services</h1>

        <div class="w-full flex flex-wrap">
          <ServiceCard v-for="service in services" :key="service.title"
             :title="service.title" :banner="service.image" :description="service.description" 
             class="w-1/3 p-2"/>

          <SeeMore class="w-1/3 p-2"/>
        </div>
      </div>
    </section>

    <section id="resume" class="flex justify-center items-center h-screen">
      This site is not complete...
    </section>
  </div>
</template>