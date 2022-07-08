import { RouteRecordRaw } from 'vue-router'

const homeRouter: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
    meta: {
      keepAlive: true,
      requiresAuth: true,
      parentTitle: '首页',
      title: "首页",
      key: 'home'
    }
  }
]

export default homeRouter
