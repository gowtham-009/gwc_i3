<template>
    <div>
        <SectionsPricing1Section1 />
        <SectionsPricing1Section2 />
        <SectionsPricing1Section3 />
        <SectionsPricing1Section4 />
        <SectionsPricing1Section5 />
    </div>
</template>
<script setup>
     useHead({
         title: 'Pricing',
        meta: [
        { name: 'description', content: 'This site is Pricing' },
        { name: 'keywords', content: 'Nuxt 3, Vuetify, Web Development' },
    { name: 'author', content: 'Your Name' },
    { name: 'robots', content: 'index, follow' },

    // Open Graph (Facebook, LinkedIn)
    { property: 'og:title', content: 'Your Website Title' },
    { property: 'og:description', content: 'A short description for social media.' },
    { property: 'og:image', content: 'https://example.com/image.jpg' },
    { property: 'og:url', content: 'https://example.com' },
    { property: 'og:type', content: 'website' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Your Website Title' },
    { name: 'twitter:description', content: 'A short description for Twitter.' },
    { name: 'twitter:image', content: 'https://example.com/image.jpg' }
    
        ],
           bodyAttrs: {
               class: "navbar-light"
           }
       })
   
</script>