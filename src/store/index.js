import Vue from 'vue'

import Vuex from 'vuex'

import film from './modules/film'
import city from './modules/city.js'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    film,
    city,
  }
})
