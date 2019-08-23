import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VueRouter)

const routes = [{
<<<<<<< HEAD
  path: '/',
  component: () => import('./views/index.vue'),
  children: [{
    path: 'movie',
    component: () => import('./views/Movie/index.vue')
=======
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
>>>>>>> feature/hebing
  },
  {
    path: 'cinema',
    component: () => import('./views/Cinema/index.vue')
  },
  {
<<<<<<< HEAD
    path: '/my',
    name: 'my',
    component: () => import('./views/MyCenter/my.vue'),
    meta: {
      needlogin: true
    }
=======
    path: '/mycenter',
    component: () => import('./views/MyCenter/index.vue')
  },
  {
    path: '/particulars/:id',
    component: () => import('./views/Movie/Particulars.vue')
>>>>>>> feature/hebing
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
  path: '/regist',
  name: 'regist',
  component: () => import('./views/MyCenter/regist.vue')
},
{
  path: '/cart',
  name: 'cart',
  component: () => import('./views/MyCenter/cart.vue'),
  meta: {
    needlogin: true
  }
}
]

const router = new VueRouter({
  routes
})
//守卫
router.beforeEach((to, from, next) => {
  if (to.meta.needlogin) {
    if (store.state.user.userInfo) {
      next()
    } else {
      next({
        path: '/mycenter',
        query:{
          redirect:to.fullPath
        }
      })
    }
  } else {
    next()
  }

})

export default router
