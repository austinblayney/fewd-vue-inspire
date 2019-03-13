import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted() {//this logic runs at application start
    store.dispatch('getData')
  },
  render: function (h) { return h(App) }
}).$mount('#app')
