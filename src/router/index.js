
import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Users = () => import('../views/users/Users.vue')
const Login = () => import('../views/login/Login.vue')
const Sigin = () => import('../views/sigin/Sigin.vue')
const Category = () => import('../views/classify/Category.vue')
const Info = () => import('../views/info/Info.vue')


const Cart = () => import('../views/cart/cart.vue')
const Set = () => import('../views/set/Set.vue')
const Shop = () => import('../views/shop/Shop.vue')
const Vip = () => import('../views/vip/Vip.vue')
const detail = () => import('../views/Detail/detail.vue')



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
    path: '/detail/:id',
    component: detail
  },
  {
    // 我的
    path: '/users',
    component: Users,
    name: 'users'
  },
  {
    // 登录
    path: '/login',
    component: Login,
    name: 'login'

  },
  {
    // 注册
    path: '/sigin',
    component: Sigin
  },
  // 分类
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
    path: '/vip',
    component: Vip
  },
  {
    //   购物车 路由独享的守卫
    path: '/cart',
    component: Cart,
    beforeEnter: (to, from, next) => {
      let token = window.sessionStorage.getItem("token");
      if (token) {
        next();
        return;
      } else {
        next('/login')
      }
    },

  }

]



const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})


// router.beforeEach((to,from,next)=>{
//   if(to.path == '/login'){
//     next()
//     return
//   }
//   if(to.path == "/home"){
//     next()
//     return
//   }
//   if(to.path == "/users"){
//     next()
//     return
//   }
//   if(to.path == "/sigin"){
//     next()
//     return
//   }
//   let token = window.sessionStorage.getItem('token')
//   if(token){
//     next()
//     return
//   }
//   next('login')
// })


export default router