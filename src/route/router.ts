import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import errorRouter from '@/route/modules/error'
import homeRouter from '@/route/modules/home'
import tableRouter from "@/route/modules/table";

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: {
      requiresAuth: true,
      title: '登录页',
      key: 'login'
    }
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/index.vue'),
    meta: {
      requiresAuth: true,
      title: '登录页',
      key: 'layout'
    },
    redirect: { name: 'home' },
    children: [...homeRouter,...tableRouter]
  },
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    redirect: { name: '404' }
  },
  ...errorRouter
]

export default createRouter({
  history: createWebHistory(),
  routes,
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 })
})
