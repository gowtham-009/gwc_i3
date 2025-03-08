<template>
    <div>     
        <SectionsDemo1Section1 />
        <SectionsDemo1Section2 />
        <SectionsDemo1Section3 />
        <SectionsDemo1Section4 />
        <SectionsDemo1Section5 />
        <SectionsDemo1Section6 />
          <SectionsDemo1Section7 />
        <SectionsDemo1Section8 />
        <SectionsDemo1Section9 />
        <SectionsDemo1Section10 />
     
        <SectionsDemo1Section11 />
        <SectionsDemo1Section12 />
        <SectionsDemo1Section13 />
        <SectionsDemo1Section14 />
        <SectionsDemo1Section15 />
        <SectionsDemo1Section16 />
        <SectionsDemo1Section17 />
        <SectionsDemo1Section18 />
        <SectionsDemo1Section19 />
        <!-- <SectionsDemo1Section20 />
        <SectionsDemo1Section21 /> -->
    </div>
</template>

<script setup>

    useHead({
      title: 'About us',
  meta: [
    { name: 'description', content: 'This site is About us' },
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