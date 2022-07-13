import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import errorRouter from '@/router/modules/error'
import homeRouter from '@/router/modules/home'
import tableRouter from '@/router/modules/table'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login'
    }
  },
  ...homeRouter,
  ...tableRouter,
  ...errorRouter,
  ...errorRouter,
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    redirect: { name: '404' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
