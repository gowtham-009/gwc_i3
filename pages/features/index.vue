<template>
    <div>
        <SectionsFeaturesSection1 />
        <SectionsFeaturesSection2 />
        <SectionsFeaturesSection3 />
        <SectionsFeaturesSection4 />
        <SectionsFeaturesSection5 />
        <SectionsFeaturesSection6 />
        <SectionsFeaturesSection7 />
        <SectionsFeaturesSection8 />
        <SectionsFeaturesSection9 />
        <SectionsFeaturesSection10 />
        <SectionsFeaturesSection11 />
        <SectionsFeaturesSection12 />
        <SectionsFeaturesSection13 />
        <SectionsFeaturesSection14 />
        <SectionsFeaturesSection15 />
    </div>
</template>
<script setup>
     useHead({
          title: 'Features',
         meta: [
         { name: 'description',  content: 'Discover the best resources and tutorials for web development, including HTML, CSS, JavaScript, and more.'  },
         { name: 'keywords', content: 'Nuxt 3, Vuetify, Web Development' },
    { name: 'author', content: 'w3' },
    { name: 'robots', content: 'index, follow' },

    // Open Graph (Facebook, LinkedIn)
    { property: 'og:title', content: 'Your Website Title' },
    { property: 'og:description', content: 'A short description for social media.' },
    { property: 'og:image', content: 'https://example.com/image.jpg' },
    { property: 'og:url', content: 'https://example.com' },
    { property: 'og:type', content: 'website' },
    {httpEquiv:"refresh", content:"30"},

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Your Website Title' },
    { name: 'twitter:description', content: 'A short description for Twitter.' },
    { name: 'twitter:image', content: 'https://example.com/image.jpg' }
    
         ],
        
          bodyAttrs: {
              class: "navbar-dark"
          },
        
      })
  
</script>