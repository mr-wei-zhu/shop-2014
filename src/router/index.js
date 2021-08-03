
import { createRouter, createWebHistory } from 'vue-router'
const Home  = () => import('../views/home/Home.vue')
const Users = () => import('../views/users/Users.vue')
const Login = () => import('../views/login/Login.vue')
const Sigin = () => import('../views/sigin/Sigin.vue')




const routes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '/home',
    component: Home 
  },
  {
    path: '/users',
    component: Users 

  },
  {
    path: '/login',
    component: Login 

  },
  {
    path:'/sigin',
    component:Sigin
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
export default router