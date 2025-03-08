<template>
    <div>
        <SectionsSignup2Section1 />
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "no-header-footer",
    })

    useHead({
          title: 'Signup',
        meta: [
          { name: 'description', content: 'My amazing site.' }
        ],
          bodyAttrs: {
              class: "navbar-light"
          }
      })
  
</script>