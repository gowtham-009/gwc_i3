<template>
    <div>
        <SectionsFaqsSection1 />
    </div>
</template>
<script setup>
    useHead({
          title: 'FAQs',
        meta: [
          { name: 'description', content: 'My amazing site.' }
        ],
          bodyAttrs: {
              class: "navbar-light"
          },
          script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
      })
  
</script>