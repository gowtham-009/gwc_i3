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
import { useHead } from '#imports'
     useHead({
           title: 'Pricing',
         meta: [
           { name: 'description', content: 'This is for Signup site.' }
         ],
           bodyAttrs: {
               class: "navbar-light"
           }
       })
   
</script>