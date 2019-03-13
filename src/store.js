import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

//utilize this _api for images, weather information, and a random quote
  //image endpoint --> /images
  //quote endpoint --> /quotes
  //weather endpoint --> /weather
const _api = Axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/',
	timeout: 3000
});

//utilize this _todoApi for all of your todo related HTTP requests
// Don't forget to change "YOURNAME" with your actual name
const _todoApi = Axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/YOURNAME/todos',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    imageData: {},
    //Add additional properties here that your application will care about
    //EXAMPLE: weatherData: {}
  },
  mutations: {
    imageData(state, data) {//this mutation will update the state and then envoke all of the functions of the observers that are watching the updated property
      state.imageData = data
    }
  },
  actions: {
    getData({dispatch}) {
      dispatch('getImageData')
      dispatch('getQuoteData')
      dispatch('getWeatherData')
      dispatch('getTodos')
    },
    getImageData({commit}) {
      _api.get('images')
        .then(res => {
          console.log(res)
          //first, check out what the res looks like, Second commit the appropriate information to the state via a mutation
          commit('imageData', res.data)
        })
    },
    //below actions you'll need to complete
    getQuoteData(){},
    getWeatherData(){},
    getTodos(){},
    // you will need additional todo actions!
      //create
      //put
      //delete
  }
})
