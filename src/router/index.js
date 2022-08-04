import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/welcome.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
