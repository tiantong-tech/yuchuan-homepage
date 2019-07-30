export default [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home/index.vue')
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
    path: '/products/hoisters',
    name: 'products hoister',
    component: () => import('./views/products/Hoisters/index.vue')
  },
  {
    path: '/products/rgv',
    name: 'products rgv',
    component: () => import('./views/products/RGV/index.vue')
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
