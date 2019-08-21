import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/base.scss'
import { Tab, Tabs } from 'vant';
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(Tab).use(Tabs);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
