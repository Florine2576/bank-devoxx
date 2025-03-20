import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { AccountType } from '../../../transactions/domain/Account';
import type { Account } from '../../../transactions/domain/Account';

export default defineComponent({
  name: 'AccountCard',
  props: {
    account: {
      type: Object as PropType<Account>,
      required: true
    }
  },
  computed: {
    accountTitle(): string {
      return this.account.type === AccountType.CHECKING ? 'Compte courant' : 'Compte épargne';
    },
    accountAmount(): string {
      return this.account.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
    accountClass(): string {
      return this.account.type === AccountType.CHECKING ? 'account-card-checking' : 'account-card-saving';
    },
    dataSelector(): string {
      return this.account.type === AccountType.CHECKING ? 'checking-account' : 'saving-account';
    }
  }
});
