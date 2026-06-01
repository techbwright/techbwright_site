<script lang="ts" setup>
import Resume from '../assets/documents/Billy_Wright_Resume.pdf'
useSeoMeta({
  title: 'Contact | Billy Wright - Software Engineer',
  description: 'Turning Complex Business Challenges into Scalable Software Solutions',
  ogTitle: 'Contact Billy Wright | Software Engineer',
  ogDescription: 'Turning Complex Business Challenges into Scalable Software Solutions',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Contact Billy Wright | Software Engineer',
  twitterDescription: 'Turning Complex Business Challenges into Scalable Software Solutions'
})
</script>
<template>
  <div class="bg-black min-h-screen items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-white text-3xl m-6">Contact Me</h1>
      <div class="m-6 max-w-xl text-center flex flex-col gap-8">
  
  <i v-motion :initial="{ opacity: 0.1, y: 50 }" :enter="{ opacity: 1, y: 0, transition:{duration: 1400} }" class="pi pi-at text-white mr-2"><a href="mailto:techbwright@gmail.com" class="m-2">techbwright@gmail.com</a></i>
  <i v-motion :initial="{ opacity: 0.1, y: 50 }" :enter="{ opacity: 1, y: 0, transition:{delay: 600, duration: 1400} }" class="pi pi-github text-white mr-2"><a href="https://github.com/techbwright" target="_blank" class="m-2 p-2">github.com/techbwright</a></i>
  <i v-motion :initial="{ opacity: 0.1, y: 50 }" :enter="{ opacity: 1, y: 0, transition:{delay: 850, duration: 1400} }" class="pi pi-phone text-white mr-2"><a class="m-2 p-2">(810) 406-6704</a></i>
  <i v-motion :initial="{ opacity: 0.1, y: 50 }" :enter="{ opacity: 1, y: 0, transition:{delay: 950, duration: 1400} }" class="pi pi-map-marker text-white mr-2"><a href="https://www.google.com/maps/place/Midland,+MI/@43.6243751,-84.4032288,11z/data=!3m1!4b1!4m6!3m5!1s0x8821809c03db0717:0x7a6c83e422b20a90!8m2!3d43.6155825!4d-84.2472116!16zL20vMDEzZHk3?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="m-2 p-2">Midland, Mi.</a></i>
  
  <i v-motion :initial="{ opacity: 0.1, y: 50 }" :enter="{ opacity: 1, y: 0, transition:{delay: 1250, duration: 1400} }" class="pi pi-file text-white mr-2"><a :href="Resume" target="_blank" class="m-2 p-2">Resume</a></i>
    </div>
        </div>
        </div>
        </template>