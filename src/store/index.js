import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import film from './modules/film'
import city from './modules/city.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    user,
    film,
    city,
  }
})
