import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { AccountAdapter } from './transactions/infrastructure/secondary/AccountAdapter'
import { TransactionService, transactionServiceKey } from './transactions/application/TransactionService'
import type { AccountRepository } from './transactions/domain/AccountRepository'

const app = createApp(App)

const accountRepository: AccountRepository = new AccountAdapter()
const transactionService = new TransactionService(accountRepository)

app.provide(transactionServiceKey, transactionService)

app.use(router)
app.mount('#app')
