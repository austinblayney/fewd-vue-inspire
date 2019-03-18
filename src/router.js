import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Todos from './views/Todos.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/todos',
      name: 'todos',
      component: Todos
      //don't forget to finish creating the key value pairs of the todo route here
    }
  ]
})
