<script lang="ts" setup>
const route = useRoute();
const navOpen = ref(false);
</script>
<template>
<div class="container bg-black text-white flex items-center relative justify-end md:justify-start min-w-screen p-4">

<!--Mobile-->

<div class="sm:hidden absolute top-2 right-2 z-50 bg-white">
  <div class="absolute top-2 right-2 pr-2">
        <button @click="navOpen = !navOpen" class="text-center">
<div v-if="!navOpen" class="bg-black">  
<i class="pi pi-bars text-white"></i>
</div>
<div v-else="navOpen" class="bg-white">
<i class="pi pi-times text-black"></i>
</div>
        </button>
        </div>
        
        <nav :class="navOpen ? '' : 'hidden'" class="p-2">
          <ul class="text-center">
            <div class="p-2 mt-4">
  <NuxtLink @click="navOpen = !navOpen"
                 to="/"
                  class="bg-white text-black"
                  >Home</NuxtLink
                >
                </div>
                <div class="p-2">
  <NuxtLink @click="navOpen = !navOpen"
                 to="/about"
                  class="bg-white text-black"
                  >About</NuxtLink
                >
                </div>
                <div class="p-2">
  <NuxtLink @click="navOpen = !navOpen"
                 to="/contact"
                  class="bg-white text-black border-white"
                  >Contact</NuxtLink
                >
                </div>
          </ul>
      </nav>
   </div>
     
     
      <!--Desktop-->
      <div class="hidden sm:block">
      <nav>
        <ul class="flex space-x-4">
          <li>
            <NuxtLink to="/"
            v-motion :initial="{ opacity: 0.1}" :enter="{ opacity: 1, transition:{ delay: 2500,
                duration: 2500 }}"
                class="hover:font-bold">
            Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" 
            v-motion :initial="{ opacity: 0.1}" :enter="{ opacity: 1, transition:{ delay: 2100,
                duration: 2100 }}"
                class="hover:font-bold">
            About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" 
            v-motion :initial="{ opacity: 0.1}" :enter="{ opacity: 1, transition:{ delay: 1300,
                duration: 1600 }}"
                class="hover:font-bold">
            Contact</NuxtLink>
          </li>
        </ul>
      </nav>
      </div>
    </div>
</template>
                