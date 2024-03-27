import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TwITter - Dein IT-Portal im Internet',
      component: HomeView
    },
    {
      path: '/login',
      name: 'TwITter - Login',
      component: LoginView
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
