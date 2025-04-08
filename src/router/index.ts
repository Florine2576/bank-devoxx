import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'transactions',
      component: () => import('../transactions/infrastructure/primary/TransactionsPage/TransactionsPage.vue')
    },
    {
      path: '/profil',
      name: 'profil',
      component: () => import('../profil/infrastructure/primary/ProfilPage/ProfilPage.vue')
    },
    {
      path: '/new-transfert',
      name: 'new-transfert',
      component: () => import('../transfert/infrastructure/primary/NewTransfertPage/NewTransfertPage.vue')
    }
  ]
})

export default router
