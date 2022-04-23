import { createRouter, createWebHistory } from 'vue-router'
import HomeIndex from '@/views/home/index.vue'
import PanoramaIndex from '@/views/panorama/index.vue'
import AboutIndex from '@/views/about/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home.index',
      component: HomeIndex,
    },
    {
      path: '/panorama',
      name: 'panorama.index',
      component: PanoramaIndex,
    },
    {
      path: '/about-project',
      name: 'about.index',
      component: AboutIndex,
    },
  ]
})

export default router
