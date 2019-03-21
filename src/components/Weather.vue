<template>
   <div class="weather">
      <h1>{{fahrenheit.toFixed(2)}}°</h1>
      <h1>{{weather.icon}}</h1>
      <h1>{{weather.description}}</h1>
   </div>
</template>

<script>
   export default {
      name: "weather",
      props: [],
      data() {
         return {}
      },
      computed: {
         weather() {
            return this.$store.state.weatherData
         },
         fahrenheit() {
            return 9 / 5 * (this.weather.tempKelvin - 273) + 32
         }
      },
      methods: {},
      components: {}
   }
</script>

<style>
   .weather {
      text-align: right;
      color: aliceblue;

   }
</style>