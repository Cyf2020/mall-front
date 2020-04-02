import Vue from 'vue'
import Router from 'vue-router'
const Home=()=>import('../view/home/Home');
const Category=()=>import('../view/category/Category');
const Cart=()=>import('../view/cart/Cart.vue');
const Profile=()=>import('../view/profile/Profile');
Vue.use(Router);

const routesOfRoot=[
  {path: '/',redirect: '/home'},
  {path: '/home',component: Home},
  {path: '/category',component: Category},
  {path: '/cart',component: Cart},
  {path: '/profile',component: Profile},
];
export default new Router({
  routes: routesOfRoot,mode: 'history'
})
