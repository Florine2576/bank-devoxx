import { defineComponent, ref, onMounted, inject } from 'vue'
import type { Transaction } from '../../../transactions/domain/Transaction'
import { TransactionService, transactionServiceKey } from '../../application/TransactionService'

export default defineComponent({
  name: 'TransactionsTable',
  setup() {
    const transactionService = inject<TransactionService>(transactionServiceKey)
    if (!transactionService) {
      throw new Error('No transaction service found')
    }

    const transactions = ref<Transaction[]>([])

    const loadTransactions = async () => {
      try {
        const result = await transactionService.getTransactions()
        transactions.value = result
      } catch (error) {
        console.error('Failed to load transactions:', error)
        transactions.value = []
      }
    }

    const formatAmount = (amount: number): string => {
      // Convert to absolute value, format with thousands separator, then add sign and € symbol
      const absAmount = Math.abs(amount)
      const formattedAmount = absAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
      return `${amount < 0 ? '-' : '+'}${formattedAmount}€`
    }

    const formatDate = (date: Date): string => {
      const day = date.getDate()
      const monthNames = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ]
      const month = monthNames[date.getMonth()]
      const year = date.getFullYear()
      return `${day} ${month} ${year}`
    }

    onMounted(async () => {
      await loadTransactions()
    })

    return {
      transactions,
      formatAmount,
      formatDate
    }
  },
})
