export default [
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
    component: () => import('./views/News.vue')
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
