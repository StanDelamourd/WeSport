import { createRouter, createWebHistory } from '@ionic/vue-router';
const routes = [
  {
    path:'/',
    redirect: '/landing'
  },
  {
    path:'/landing',
    component: () => import('../pages/Landing.vue')
  },
  
  {
    path: '/memories',
    redirect: '/memoriesPage'
  },
  {
    path:'/memoriesPage',
    component: () => import('../pages/MemoriesPage.vue')
  },
  {
    path:'/memoriesPage/:id',
    component: () => import('../pages/MemoryDetails.vue')
  },
  ]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
