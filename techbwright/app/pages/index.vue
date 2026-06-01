<script lang="ts" setup>
import LOGO from '/images/bwright_logo.png'
import ME from '/images/Me_Glasses.jpeg'
useSeoMeta({
  title: 'Billy Wright | Software Systems Engineer',
  description: 'Turning Complex Business Challenges into Scalable Software Solutions',
  ogTitle: 'Billy Wright | Software Systems Engineer',
  ogDescription: 'Turning Complex Business Challenges into Scalable Software Solutions',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Billy Wright | Software Systems Engineer',
  twitterDescription: 'Turning Complex Business Challenges into Scalable Software Solutions'
})
</script>
<template>
    <main>
    <div class="flex flex-col items-center justify-center">
<img v-motion :initial="{ opacity: 0.1, y: 50 }" :enter="{ opacity: 1, y: 0, transition:{
                duration: 1700} }" :src="LOGO" alt="Techbwright Logo" class="w-110 h-auto mt-6 mb-1" />
                
                <h2 class="text-white mb-12">Let's Build It!</h2>
    </div>
                <div v-motion :initial="{ opacity: 0, y: 50 }"  
:visible="{ opacity: 1, scale: 1, y: 0, transition:{duration: 1500} }" 
:viewport="{ once: true, amount: 0.6 }" class="circle-frame">
<img v-motion :initial="{ opacity: 0, y: 50 }"  
:visible="{ opacity: 1, scale: 1, y: 0, transition:{duration: 1580} }" 
:viewport="{ once: true, amount: 0.65 }"
:src="ME" alt="B Wright" />
                </div>
          <div class="m-8 max-w-2xl">
<p class="text-white text-center mb-2">I'm Billy Wright, an experienced software developer with a knack for creating innovative solutions.<br/><br/>
Want to create something unique?<br>
Or perhaps you've built something that could use a little boost?<br>- I would love to help!
</p>
          </div>
  </main>
</template>
<style scoped>
.circle-frame {
  width: 280px; /* Adjust size */
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Shadow */
  
}

.circle-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image fills space without stretching */
}
@media screen and (max-width: 600px) {
    .no-mobile {
        display: none;
    }
}
</style>