<template>
    <div>
        <SectionsContactsSection1 />
        <SectionsContactsSection2 />
    </div>
</template>
<script setup>
     useHead({
             title: 'Contacts',
           meta: [
             { name: 'description', content: 'My amazing site.' }
           ],
             bodyAttrs: {
                 class: "navbar-light"
             },
             script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
         })
     
</script>