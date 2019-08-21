import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/base.scss'
import { Tab, Tabs } from 'vant';
import VueResource from 'vue-resource'
import store from './store'


Vue.use(VueResource)
Vue.use(Tab).use(Tabs);
Vue.config.productionTip = false
Vue.use(store)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
