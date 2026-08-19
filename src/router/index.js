import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/views/dashboard.vue'
import Dashboard from '@/views/dashboard.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'landing',
      component: Dashboard
    }
  ]
})

export default router