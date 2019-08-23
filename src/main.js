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


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
