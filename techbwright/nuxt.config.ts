import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", 'primeicons/primeicons.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  modules: ["@vueuse/motion", "@nuxtjs/seo"],
  robots: {
      allow: ['/'] 
  },
  site: {
    url: 'https://techbwright.com',
    name: 'techbwright',
    description: 'Billy Wright - Software Developer',
    defaultLocale: 'en',
  },
  sitemap: {
    // Generate at runtime.
    zeroRuntime: true 
  },
  ogImage: {
    enabled: false, // This turns off the dynamic generation
  },
app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/.png', href: '/icon.png' }
      ],
      meta: [
        { property: 'og:image', content: '/og-image.png' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  }
  
})