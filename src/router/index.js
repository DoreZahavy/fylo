import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Features from '../views/Features.vue'
import Team from '../views/Team.vue'
import Signin from '../views/Signin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/features',
      name: 'features',
      component:Features
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/team',
      name: 'team',
      component:Team
    },
    {
      path: '/signin',
      name: 'signin',
      component:Signin
    },
  ]
})

export default router
