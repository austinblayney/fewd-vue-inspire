<template>
   <div class="dashboard container-fluid">
      <quote />
      <weather />
      <!-- Among other things, you'll need a router-link somewhere in this template that will change the path to todos -->
      <router-link :to="{ name: 'todos' }">
         Todos
      </router-link>
   </div>
</template>

<script>
   //this imports some code within this file that can know be used within the file
   import Quote from '@/components/Quote.vue'
   import Weather from '@/components/Weather.vue'
   //what else do you want to import?

   export default {
      name: "dashboard",
      props: [],
      data() {
         return {}
      },
      computed: {},
      methods: {},
      components: {//here we register any of the imported code that we want to utilize as components within our template
         Quote,
         Weather
      }
   }
</script>