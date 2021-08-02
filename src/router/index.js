
import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/home/Home.vue')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
export default router