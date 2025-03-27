import { defineComponent, ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import type { NewTransaction } from '../../../domain/NewTransaction';
import { TransactionService, transactionServiceKey } from '../../../application/TransactionService';

export default defineComponent({
  name: 'NewTransfertPage',
  setup() {
    const router = useRouter();
    const transactionService = inject<TransactionService>(transactionServiceKey);

    if (!transactionService) {
      throw new Error('TransactionService not provided');
    }

    const newTransaction = ref<NewTransaction>({
      description: '',
      amount: 0
    });

    const saveTransaction = async () => {
      try {
        await transactionService.createTransaction(newTransaction.value);
        router.push('/');
      } catch (error) {
        console.error('Error saving transaction:', error);
      }
    };

    return {
      newTransaction,
      saveTransaction
    };
  }
});
