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
           { name: 'description', content: 'My amazing site.' }
         ],
           bodyAttrs: {
               class: "navbar-light"
           },
           script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
       })
   
</script>