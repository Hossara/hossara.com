<script setup lang="ts">
// Imports
import { Service } from './interfaces'
import {isMenuOpen} from "#imports"
import frontend from "~/assets/img/banner/frontend.jpg"
import backend from "~/assets/img/banner/backend.jpg"
import devops from "~/assets/img/banner/devops.jpg"
import mobile from "~/assets/img/banner/mobile.jpg"

// Meta Tags
useServerSeoMeta({
  title: 'Hossein Araghi',
  ogTitle: 'Hossein Araghi website',
  description: 'Hossein Araghi a Full-stack developer. Interested in computer science, photography, music, astrology.',
  ogDescription: 'Hossein Araghi a Full-stack developer. Interested in computer science, photography, music, astrology.',
  ogImage: 'https://hossara.com/favicon.ico',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  definePerson({
    name: 'Hossein Araghi',
    image: "https://hossara.com/favicon.ico",
    sameAs: [
      'https://github.com/Hossara',
      'https://www.linkedin.com/in/hossara/',
      'https://instagram.com/hossara.dev'
    ]
  }),
  defineWebSite({
    name: "Hossein Araghi website",
    description: 'Hossein Araghi a Full-stack developer. Interested in computer science, photography, music, astrology.',
    url: "https://hossara.com"
  }),
  defineWebPage(),
])

// Webpage
const config = useRuntimeConfig()

const linked = useState(() => `${config.public.LINKED_IN}`)
const telegram = useState(() => `${config.public.TELEGRAM}`)
const instagram = useState(() => `${config.public.INSTAGRAM}`)
const github = useState(() => `${config.public.GITHUB}`)
const repo = useState(() => `${config.public.REPO}`)
const blog = useState(() => `${config.public.BLOG}`)
const mailto = useState(() => `mailto:${config.public.EMAIL}`)

const goto = (id: string) => document.getElementById(id)?.scrollIntoView({behavior: "smooth"}) 
const isScroll = useState(() => false)

const top = computed({
  get: () => isScroll.value,
  set: (value: boolean) => isScroll.value = value
})

function onScroll() { top.value = window.top!.scrollY > 0 }

onMounted(() => window.addEventListener("scroll", onScroll))
onUnmounted(() => window.addEventListener("scroll", onScroll))

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

const fl_value = useState(() => "")
const email_value = useState(() => "")
const option_value = useState(() => "hiring")
const message_value = useState(() => "")

const isSending = useState(() => false)

const sendMessage = async () =>
{
  isSending.value = true

  const loading = useNuxtApp().$showToast.loading("Sending message...")

  const { data, error } = await useCsrfFetch('/api/sendMessage', { 
    query: {
      from: email_value.value,
      fl: fl_value.value,
      subject: option_value.value,
      message: message_value.value
    },
    method: 'POST'
  })

  if(error.value)
  {
    console.log(error.value)
    useNuxtApp().$showToast.update(loading, {
      render: "Somthing went wrong!. Check console",
      type: "error",
      autoClose: true,
      closeOnClick: true,
      isLoading: false
    })
  }
  else if(data.value?.code == 200)
  { 
    useNuxtApp().$showToast.update(loading, {
      render: "Message sent successfully!",
      type: "success",
      autoClose: true,
      closeOnClick: true,
      isLoading: false
    })
  }

  isSending.value = false
}
</script>

<template>
  <MobileMenu/>
  <div id="index" class="hidden mobile:block">
    <button class="fixed bottom-4 right-4 bg-hs-dark w-[50px] h-[50px] flex justify-center items-center rounded-full hover:bg-hs-purple shadow-md
          opacity-0 -z-30" :class="{ 'opacity-100 z-50': top }" @click="goto('home')">
      <img src="./assets/img/arrow2.svg" alt="top">
    </button>

    <header class="flex justify-center items-center p-5 pt-7 h-[76px]" 
      :class="{ 'fixed top-0 left-0 right-0 !p-0 !h-[60px] z-40 bg-black/60' : top }">
      <NuxtLink @click="goto('home')" class="menu-item">Home</NuxtLink>
      <NuxtLink @click="goto('services')" class="menu-item">Services</NuxtLink>
      <NuxtLink @click="goto('contact')" class="menu-item">Contact me</NuxtLink>
      <NuxtLink :to="blog" target="_blank" class="menu-item">Blog</NuxtLink>
    </header>

    <section id="home" class="h-[calc(100vh_-_76px)] flex items-center xl:max-w-[80%] lg:max-w-none w-full m-auto">
      <div class="h-[40%] w-full flex justify-center items-center">
        <div class="h-full flex bg-white aspect-square rounded-[40px] rotate-45 relative items-center overflow-hidden shadow-[-40px_-40px_140px] shadow-hs-purple">
          <img src="./assets/img/h_full.png" class="rotate-[-45deg] absolute left-[-5px]" alt="Hossein Araghi">
        </div>
      </div>
      <div class="w-full flex justify-center items-center pb-4">
        <div class="flex flex-col">
          <p class="xl:text-[56px] sm:text-[40px] font-medium">Hello, I'm a</p>
          <p class="xl:text-[56px] sm:text-[40px] font-bold">Full-stack developer</p>
          <p class="xl:text-[48px] sm:text-[34px] font-medium">Hossein Araghi</p>
          
          <div class="mt-[60px] max-w-[522px] w-full">
            <div class="flex">
              <a :href="mailto + '?subject=Hiring%20Hossein%20Araghi'" class="w-full pr-[10px]"><ButtonLink active>Hire me</ButtonLink></a>
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
      <div class="xl:w-[55%] lg:w-[80%] md:w-[80%]">
        <h1 class="p-2 title">Services</h1>

        <div class="w-full flex flex-wrap">
          <ServiceCard v-for="service in services" :key="service.title"
             :title="service.title" :banner="service.image" :description="service.description" 
             class="w-1/3 p-2"/>

          <SeeMore class="w-1/3 p-2"/>
        </div>
      </div>
    </section>

    <section id="contact" class="flex justify-center items-center h-[90vh]">
      <div class="xl:w-[55%] lg:w-[80%] md:w-[80%]">
        <h1 class="title mb-3">Contact me</h1>

        <div class="w-full flex">
          <form class="w-1/2 pr-4" @submit.prevent="sendMessage">
            <h2 class="title text-[20px] mb-2">Send me an message</h2>
            <TextInput placeholder="Full name" type="text" class="w-full mb-3" required v-model:value="fl_value"/>
            <TextInput placeholder="Email" type="email" class="w-full mb-3" required v-model:value="email_value"/>
            <SelectOption required class="mb-3" v-model:value="option_value">
              <option>hiring</option>
              <option>contribution</option>
              <option>consultation</option>
              <option>other</option>
            </SelectOption>

            <TextAreaInput placeholder="Message" required class="mb-4" v-model:value="message_value"/>

            <ButtonLink small :disabled="isSending">{{ isSending ? 'Sending...' : 'Send message' }}</ButtonLink>
          </form>
          <div class="w-1/2 pl-4">
            <h2 class="title text-[20px] mb-2">Contact me with social media</h2>
            <SocialMedia title="Telegram" id="hossara_dev" :link="telegram" class="mb-3"/>
            <SocialMedia title="Instagram" id="hossara.dev" :link="instagram" class="mb-3"/>
            <SocialMedia title="Linkedin" id="hossara" :link="linked" class="mb-3"/>
            <SocialMedia title="Github" id="Hossara" text="Checkout my GitHub account" :link="github"/>
          </div>
        </div>
      </div>
    </section>

    <section class="h-[30vh] bg-black/60 rounded-[20px_20px_0_0] p-2 flex justify-center items-center flex-col">
      <h1 class="text-[40px] mb-2">Developed with <span class="text-pink-500">&hearts;</span> by Hossein Araghi</h1>

      <a :href="repo" target="_blank" class="hover:text-blue-300 hover:border-blue-300 text-blue-100 hover:border-[1px] hover:p-2 rounded-lg">
        Source code available in my github
      </a>
    </section>
  </div>

  <div id="index_mobile" class="mobile:hidden flex flex-col">
    <header class="p-6 flex justify-between items-center h-[70px]"
      :class="{ 'fixed top-0 left-0 right-0 !h-[60px] z-40 bg-black/60' : top }">
      <h1 class="text-[20px] font-bold">Hossein Araghi</h1>

      <img src="./assets/img/menu.svg" alt="menu" class="w-[28px]" @click="isMenuOpen().value = true">
    </header>

    <section id="mobile_home" class="h-[calc(92vh_-_70px)] flex flex-col items-center justify-center">
      
      <div class="relative max-h-[300px] max-w-[300px] aspect-square mx-auto h-full flex justify-center">
          <div class="absolute left-[60px] right-[60px] top-[60px] z-0 bottom-[60px] rotate-45 bg-white aspect-square overflow-hidden rounded-[40px] shadow-[-10px_-10px_80px] shadow-hs-purple">
            
            <img src="./assets/img/h_full.png" class="aspect-square h-[250px]  object-contain rotate-[-45deg] absolute left-[8%] bottom-[-30%]" alt="Hossein Araghi">
          </div>
      </div>

      <div class="flex flex-col mx-auto w-fit mt-5 text-center">
        <p class="text-[32px] sm:text-[40px] font-medium">Hello, I'm a</p>
        <p class="text-[32px] sm:text-[40px] font-bold">Full-stack developer</p>
        <p class="text-[24px] sm:text-[34px] font-medium">Hossein Araghi</p>
      </div>

      <div class="flex flex-wrap mt-auto w-full p-4">
          <div class="flex w-full pb-4">
            <a :href="mailto + '?subject=Hiring%20Hossein%20Araghi'" class="w-full pr-2"><ButtonLink active small>Hire me</ButtonLink></a>
            <a :href="linked" class="w-full pl-2" target="_blank"><ButtonLink small class="w-full">Portfolio</ButtonLink></a>
          </div>
          <a :href="telegram" class="w-full">
              <ButtonLink small>
                <img src="./assets/img/telegram.svg" class="mr-[20px] w-[24px]" alt="telegram"> Get in touch by Telegram
              </ButtonLink>
          </a>
      </div>
    </section>

    <section id="mobile_services" class="mt-20 w-[90%] mx-auto max-w-[420px]">
      <h1 class="p-2 title mobile">Services</h1>

      <div class="w-full flex flex-col">
        <ServiceCard v-for="service in services" :key="service.title"
            :title="service.title" :banner="service.image" :description="service.description" 
            class="p-2"/>

        <SeeMore class=" p-2"/>
      </div>
    </section>

    <section id="mobile_contact" class="mt-20 w-[90%] mx-auto max-w-[420px]">
      <h1 class="p-2 title mobile">Contact me</h1>

      <div class="w-full flex flex-col p-2">
          <form class="w-full flex flex-col" @submit.prevent="sendMessage">
            <h2 class="title text-[20px] mb-2">Send me an message</h2>
            <TextInput placeholder="Full name" type="text" class="w-full mb-4" required v-model:value="fl_value"/>
            <TextInput placeholder="Email" type="email" class="w-full mb-4" required v-model:value="email_value"/>
            <SelectOption required class="mb-4" v-model:value="option_value">
              <option>hiring</option>
              <option>contribution</option>
              <option>consultation</option>
              <option>other</option>
            </SelectOption>

            <TextAreaInput placeholder="Message" required class="mb-5" v-model:value="message_value"/>

            <ButtonLink small :disabled="isSending">{{ isSending ? 'Sending...' : 'Send message' }}</ButtonLink>
          </form>
          <div class="w-full flex flex-col mt-10">
            <h2 class="title text-[20px] mb-2">Contact me with social media</h2>
            <SocialMedia title="Telegram" id="hossara_dev" :link="telegram" class="mb-4"/>
            <SocialMedia title="Instagram" id="hossara.dev" :link="instagram" class="mb-4"/>
            <SocialMedia title="Linkedin" id="hossara" :link="linked" class="mb-4"/>
            <SocialMedia title="Github" id="Hossara" text="Checkout my GitHub account" :link="github"/>
          </div>
        </div>
    </section>

    <section class="h-[30vh] bg-black/60 rounded-[20px_20px_0_0] p-2 mt-10 flex justify-center items-center flex-col">
      <h1 class="text-[20px] mb-4">Developed with <span class="text-pink-500">&hearts;</span> by Hossein Araghi</h1>

      <a :href="repo" target="_blank" class="hover:text-blue-300 hover:border-blue-300 text-blue-100 hover:border-[1px] hover:p-2 rounded-lg">
        Source code available in my github
      </a>
    </section>
  </div>
</template>

<style lang="sass">
@import "vue3-toastify/dist/index.css"
</style>