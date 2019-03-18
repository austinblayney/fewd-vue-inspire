<template>
   <div class="quote">
      <h1>{{quoteData.body}}</h1>
      <h3>-{{quoteData.author}}</h3>
   </div>
</template>

<script>
   export default {
      name: "quote",
      props: [],
      data() {
         return {}
      },
      computed: {
         quoteData() {
            return this.$store.state.quoteData
         }
      },
      methods: {},
      components: {}
   }
</script>
<style>
   .quote {
      color: aliceblue;
      text-align: unset;
      position: fixed;
      bottom: 5%
   }
</style>