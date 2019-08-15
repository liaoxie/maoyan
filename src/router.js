import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import('./views/index.vue'),
    children: [{
        path: 'movie',
        component: () => import('./views/Movie/index.vue')
      },
      {
        path: 'cinema',
        component: () => import('./views/Cinema/index.vue')
      }
    ]
  },
  {
    path: '/city-list',
    component: () => import('./views/City-list/index.vue')
  },
  {
    path: '/mycenter',
    component: () => import('./views/MyCenter/index.vue')
  }
]



const router = new VueRouter({
  routes
})

export default router
