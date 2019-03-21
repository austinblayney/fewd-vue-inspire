<template>
  <div class="clock">
    <div id="clock">
      <p class="date">{{ date() }}</p>
      <p class="time">{{ time() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "clock",
  props: [],
  data() {
    return {};
  },
  computed: {},
  methods: {
    date() {
      let d = new Date();
      return d.getMonth() + 1 + "-" + d.getDate() + "-" + d.getFullYear();
    },
    time() {
      let t = new Date();
      return t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
    }
  },
  components: {}
};
</script>

<style>
.date {
  color: antiquewhite;
}

.time {
  color: antiquewhite;
}
</style>
