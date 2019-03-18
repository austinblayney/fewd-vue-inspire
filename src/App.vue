<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "app",
    props: [],
    data() {
      return {}
    },
    computed: {
      imageData() {//this logic is watching the value of imageData in the state within the store.js file
        return this.$store.state.imageData
      },

    },
    methods: {},
    components: {},
    watch: {//Don't Modify This. This logic will set the background image when a url is available
      imageData: {
        handler: (image) => {
          if (image.url) {
            document.querySelector('#app').style.backgroundImage = `url('${image.url}')`
          }
        }
      }
    }
  }
</script>

<style>
  /* css rules here (with the style tages not scoped) will permeate throughout the app and can help with organization */
  #app {
    /* write the rules here that will style the background image pleasantly */
    /* EXAMPLES: */
    min-height: 100vh;
    height: fit-content;
    background-repeat: no-repeat;
    background-size: cover
  }
</style>