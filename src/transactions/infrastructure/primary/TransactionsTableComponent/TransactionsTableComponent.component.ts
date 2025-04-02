import { defineComponent, inject, ref, onMounted } from 'vue';
import type { Transaction } from '../../../domain/Transaction';
import { transactionServiceKey } from '../../../application/TransactionService';

export default defineComponent({
  name: 'TransactionsTableComponent',
  setup() {
    const transactions = ref<Transaction[]>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);

    const transactionService = inject(transactionServiceKey);
    if (!transactionService) {
      throw new Error('TransactionService not provided');
    }

    const formatAmount = (amount: number): string => {
      const sign = amount >= 0 ? '+' : '-';
      const absAmount = Math.abs(amount);
      const formattedAmount = absAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      return `${sign}${formattedAmount}€`;
    };

    const formatDate = (date: Date): string => {
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();

      const frenchMonths = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ];

      return `${day} ${frenchMonths[monthIndex]} ${year}`;
    };

    const getAmountClass = (amount: number): string => {
      return amount >= 0 ? 'positive-amount' : 'negative-amount';
    };

    onMounted(async () => {
      try {
        transactions.value = await transactionService.getTransactions();
        loading.value = false;
      } catch (err) {
        error.value = 'Failed to load transactions';
        loading.value = false;
        console.error('Error loading transactions:', err);
      }
    });

    return {
      transactions,
      loading,
      error,
      formatAmount,
      formatDate,
      getAmountClass
    };
  }
});
