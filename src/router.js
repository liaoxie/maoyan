import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import('./views/index.vue'),
    children: [{
        path: 'movie',
        component: () => import('./views/Movie/index.vue'),
        children: [{
            path: '1',
            component: () => import('./views/Movie/MovieRei.vue'),
          },
          {
            path: '2',
            component: () => import('./views/Movie/MovieZen.vue'),
          },

        ]
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
  },
  {
    path: '/particulars/:id',
    component: () => import('./views/Movie/Particulars.vue')
  }
]



const router = new VueRouter({
  routes
})

export default router
