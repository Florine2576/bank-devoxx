import ProfilPage from '@/profil/infrastructure/primary/ProfilPage.vue'
import TransactionsPage from '@/transactions/infrastructure/primary/TransactionsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'transactions',
      component: TransactionsPage
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfilPage
    }
  ]
})

export default router
