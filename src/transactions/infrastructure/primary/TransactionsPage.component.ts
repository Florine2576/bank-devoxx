import { defineComponent, ref, onMounted, inject } from 'vue'
import type { Account } from '../../../transactions/domain/Account'
import AccountCard from './AccountCard.vue'
import { TransactionService, transactionServiceKey } from '../../application/TransactionService'

export default defineComponent({
  name: 'TransactionsPage',
  components: {
    AccountCard,
  },
  setup() {
    const transactionService = inject<TransactionService>(transactionServiceKey)
    if (!transactionService) {
      throw new Error('No transaction service found')
    }

    const accounts = ref<Account[]>([])

    const loadAccounts = async () => {
      try {
        const result = await transactionService.getAccounts()
        accounts.value = result
      } catch (error) {
        console.error('Failed to load accounts:', error)
        accounts.value = []
      }
    }

    onMounted(async () => {
      await loadAccounts()
    })

    return {
      accounts,
    }
  },
})
