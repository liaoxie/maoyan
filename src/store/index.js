import Vue from 'vue'
<<<<<<< HEAD
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    user
=======

import Vuex from 'vuex'

import film from './modules/film'
import city from './modules/city.js'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    film,
    city,
>>>>>>> feature/hebing
  }
})
