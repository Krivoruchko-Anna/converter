import { createRouter, createWebHistory } from 'vue-router'
import Converter from '../views/Converter.vue'

const routes = [
  {
    path: '/',
    name: 'Converter',
    component: Converter
  },
  {
    path: '/currencies',
    name: 'Currencies',
    // route level code-splitting
    // this generates a separate chunk (currencies.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "currencies" */ '../views/Currencies.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
