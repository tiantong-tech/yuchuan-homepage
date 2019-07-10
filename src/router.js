import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
Router.prototype.isMatched = isMatched

export default new Router({
  mode: process.env.NODE_ENV === 'development' ? 'hash' : 'history',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home/index.vue')
    },
    {
      path: '/products/hoisters',
      name: 'hoister',
      component: () => import('./views/Hoister/index.vue')
    },
    {
      path: '/products/rgv',
      name: 'rgv',
      component: () => import('./views/Products/RGV/index.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('./views/Products/index.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/News/index.vue')
    },
    {
      path: '/news/:id',
      name: 'news detail',
      props: true,
      component: () => import('./views/News/Detail.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('./views/Service.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About/index.vue')
    },
    {
      path: '/prices/hoister',
      name: 'hoister price',
      component: () => import('./views/prices/Hoister/index.vue'),
      children: [
        {
          path: 'created',
          name: 'hoister created',
          component: () => import('./views/prices/Hoister/Created.vue')
        }
      ]
    }
  ]
})

function isMatched ({ name, params }) {
  const route = this.app.$route
  const isMatched = route.matched.findIndex(
    route => route.name === name
  ) !== -1

  if (!isMatched || !params) {
    return isMatched
  }

  for (let key in params) {
    if (
      getValue(params[key]) !==
      getValue(route.params[key])
    ) {
      return false
    }
  }

  return true
}

function getValue (value) {
  return typeof value === 'number' ? value.toString() : value
}
