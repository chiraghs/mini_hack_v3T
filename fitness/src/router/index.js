import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/consult',
    name: 'Consult',
    component: () => import(/* webpackChunkName: "about" */ '../views/consult.vue')
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import(/* webpackChunkName: "about" */ '../views/store.vue')
  },
  {
    path: '/diet',
    name: 'Diet',
    component: () => import(/* webpackChunkName: "about" */ '../views/diet.vue')
  },
  {
    path: '/vegan',
    name: 'Vegan',
    component: () => import(/* webpackChunkName: "about" */ '../views/vegan.vue')
  },
  {
    path: '/male',
    name: 'Vegan',
    component: () => import(/* webpackChunkName: "about" */ '../views/male.vue')
  },
  {
    path: '/female',
    name: 'Vegan',
    component: () => import(/* webpackChunkName: "about" */ '../views/female.vue')
  },
  {
    path: '/children',
    name: 'Vegan',
    component: () => import(/* webpackChunkName: "about" */ '../views/kid.vue')
  },
  {
    path: '/elder',
    name: 'Vegan',
    component: () => import(/* webpackChunkName: "about" */ '../views/elder.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
