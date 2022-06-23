import {createRouter, createWebHistory} from 'vue-router'

const routes = [
	{path: '/', redirect: '/home'},
	{
		path: '/home',
		name: 'home',
		component: () => import('../views/home.vue')
	},
	{
		path: '/setting',
		name: 'setting',
		component: () => import('../views/setting.vue')
	},
	{
		path: '/other',
		name: 'other',
		component: () => import('../views/other.vue')
	},
	{
		path: '/debounce',
		name: 'debounce',
		component: () => import('../views/debounce.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login/index.vue')
	}
]

export default createRouter({
	history: createWebHistory(),
	routes: routes
})
