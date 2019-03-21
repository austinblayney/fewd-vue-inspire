import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router';

Vue.use(Vuex)

//utilize this _api for images, weather information, and a random quote
//image endpoint --> /images
//quote endpoint --> /quotes
//weather endpoint --> /weather
const _api = Axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/',
  timeout: 5000
});

//utilize this _todoApi for all of your todo related HTTP requests
// Don't forget to change "YOURNAME" with your actual name
const _todoApi = Axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/Austin/todos',
  timeout: 5000
})

export default new Vuex.Store({
  state: {
    imageData: {},
    //Add additional properties here that your application will care about
    //EXAMPLE: weatherData: {}
    quoteData: {},
    weatherData: {},
    todos: [],
    clock: {}
  },
  mutations: {
    imageData(state, data) {//this mutation will update the state and then envoke all of the functions of the observers that are watching the updated property
      state.imageData = data
    },
    quoteData(state, data) {
      state.quoteData = data
    },
    weatherData(state, data) {
      state.weatherData = data
    },
    todos(state, data) {
      state.todos = data
    }
  },

  actions: {
    getData({ dispatch }) {
      dispatch('getImageData')
      dispatch('getQuoteData')
      dispatch('getWeatherData')
      dispatch('getTodos')
    },
    getImageData({ commit }) {
      _api.get('images')
        .then(res => {
          console.log(res)
          //first, check out what the res looks like, Second commit the appropriate information to the state via a mutation
          commit('imageData', res.data)
        })
    },
    //below actions you'll need to complete
    getQuoteData({ commit }) {
      _api.get('quotes')
        .then(res => {
          console.log(res)
          commit('quoteData', res.data.quote)
        })
    },
    getWeatherData({ commit }) {
      _api.get('weather')
        .then(res => {
          console.log(res)
          let weather = {
            tempKelvin: res.data.main.temp,
            icon: res.data.weather[0].icon,
            description: res.data.weather[0].description
          }
          commit('weatherData', weather)
        })
    },
    getTodos({ commit }) {
      _todoApi.get('')
        .then(res => {
          console.log(res)
          commit('todos', res.data.data)
        })
    },
    postTodo({ commit, dispatch }, payload) {
      _todoApi.post('', payload)
        .then(res => {
          console.log(res)
          dispatch('getTodos')
        })
    },

    deleteTodo({ dispatch }, todoId) {
      _todoApi.delete(todoId)
        .then(res => {
          console.log(res)
          dispatch('getTodos')
        })
    },
    putTodo({ dispatch }, todo) {
      _todoApi.put(todo._id, todo)
        .then(res => {
          console.log(res)
          dispatch('getTodos')
        })
    }

    // you will need additional todo actions!
    //create
    //put
    //delete
  }
})