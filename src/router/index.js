import { createRouter, createWebHistory } from 'vue-router'
import HomeIndex from '@/views/home/index.vue'
import StatisticIndex from '@/views/statistics/index.vue'
import AlternativeIndex from '@/views/alternatives/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home.index',
      component: HomeIndex,
    },
    {
      path: '/statistics',
      name: 'statistics.index',
      component: StatisticIndex,
    },
    {
      path: '/alternatives',
      name: 'alternatives.index',
      component: AlternativeIndex,
    },
  ]
})

export default router
