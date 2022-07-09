import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routerHistory = createWebHistory()
const routes:Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login/index.vue')
  }
]
const router = createRouter({
  history: routerHistory,
  routes
})

export default router