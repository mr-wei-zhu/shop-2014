
import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Users = () => import('../views/users/Users.vue')
const Login = () => import('../views/login/Login.vue')
const Sigin = () => import('../views/sigin/Sigin.vue')
const Category = () => import('../views/classify/Category.vue')
const Info = () => import('../views/info/Info.vue')
const Set = () =>import('../views/set/Set.vue')
const Shop = () =>import('../views/shop/Shop.vue')
const Vip = () =>import('../views/vip/Vip.vue')
const Cart = () =>import('../views/cart/Cart.vue')


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    // 我的
    path: '/users',
    component: Users

  },
  {
    // 登录
    path: '/login',
    component: Login

  },
  {
    // 注册
    path: '/sigin',
    component: Sigin
  },
  {
    path: '/classify',
    component: Category
  },
  {
    // 我的信息
    path: '/info',
    component: Info
  },
  {
    // 设置
    path: '/set',
    component: Set
  },
  {
    // 积分商城
    path: '/shop',
    component: Shop
  },
  {
    // vip
    path:'/vip',
    component:Vip
  },
  {
    // 购物车
    path:'/cart',
    component:Cart
  }
 
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
export default router