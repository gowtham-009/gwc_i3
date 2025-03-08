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
             { name: 'description', content: 'This is for Contact site' }
           ],
             bodyAttrs: {
                 class: "navbar-light"
             }
         })
     
</script>