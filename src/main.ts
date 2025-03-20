import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { TransactionService, transactionServiceKey } from './transactions/application/TransactionService'
import type { AccountRepository } from './transactions/domain/AccountRepository'
import { AccountApiRepository } from './transactions/infrastructure/secondary/AccountApiRepository'

const app = createApp(App)

const accountRepository: AccountRepository = new AccountApiRepository()
const transactionService = new TransactionService(accountRepository)

app.provide(transactionServiceKey, transactionService)

app.use(router)
app.mount('#app')
