import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  List,
  Cell,
  Search
} from 'vant';

Vue
  .use(List)
  .use(Cell)
  .use(Search)
import './assets/style/base.scss'
import { Tab, Tabs } from 'vant'
import VueResource from 'vue-resource'
import store from './store'
import babel from 'babel-plugin-import'

<<<<<<< HEAD
Vue.use(VueResource)
Vue.use(Tab).use(Tabs)
=======

>>>>>>> feature/hebing
Vue.config.productionTip = false
Vue.use(store)
new Vue({
<<<<<<< HEAD
  babel,
=======
>>>>>>> feature/hebing
  store,
  router,
  render: h => h(App)
}).$mount('#app')
