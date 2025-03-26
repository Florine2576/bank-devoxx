import { defineComponent, inject, ref, onMounted, computed } from 'vue';
import type { Account, AccountType } from '../../../domain/Account';
import { accountServiceKey } from '../../../application/AccountService';

export default defineComponent({
  name: 'AccountsComponent',
  setup() {
    const accounts = ref<Account[]>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);

    const accountService = inject(accountServiceKey);
    if (!accountService) {
      throw new Error('AccountService not provided');
    }

    const formatAmount = (amount: number): string => {
      const sign = amount >= 0 ? '+' : '-';
      const absAmount = Math.abs(amount);
      const formattedAmount = absAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      return `${sign}${formattedAmount}€`;
    };

    const getAccountTitle = (type: AccountType): string => {
      return type === 'CHECKING' ? 'Compte courant' : 'Compte épargne';
    };

    const checkingAccount = computed(() =>
      accounts.value.find(account => account.type === 'CHECKING')
    );

    const savingAccount = computed(() =>
      accounts.value.find(account => account.type === 'SAVING')
    );

    onMounted(async () => {
      try {
        accounts.value = await accountService.getAccounts();
        loading.value = false;
      } catch (err) {
        error.value = 'Failed to load accounts';
        loading.value = false;
        console.error('Error loading accounts:', err);
      }
    });

    return {
      accounts,
      loading,
      error,
      formatAmount,
      getAccountTitle,
      checkingAccount,
      savingAccount
    };
  }
});
