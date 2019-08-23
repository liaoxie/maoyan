import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import babel from 'babel-plugin-import'
import './assets/style/base.scss'
import {
  List,
  Cell,
  Search,
  Tab,
  Tabs
} from 'vant';

Vue
  .use(List)
  .use(Cell)
  .use(Search)
  .use(VueResource)
  .use(Tab).use(Tabs)
  .use(store)


Vue.config.productionTip = false

new Vue({
  babel,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
