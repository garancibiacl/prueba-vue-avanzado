import Vue from 'vue'
import VueRouter from 'vue-router'
import { observador } from '../firebase.js'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name:'Login',
    component: () => import( '../views/LoginUsuario.vue'),
  },
  {
    path: '/registro',
    name:'Registro',
    component: () => import( '../views/RegistroUsuario.vue'),
  },
  {
    path: '/home',
    name:'Home',
    component: () => import( '../views/Home.vue'),
  },
  {
    path: '/courses',
    name:'Courses',
    component: () => import( '../views/AddCourses.vue'),
  },
  {
    path: '/admin',
    component: () => import( '../views/Admin.vue'),
  },

  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  observador(to, next);
});


export default router
