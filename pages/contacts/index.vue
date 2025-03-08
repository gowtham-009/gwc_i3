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
             { name: 'Contact', content: 'Contact site' }
           ],
             bodyAttrs: {
                 class: "navbar-light"
             }
         })
     
</script>