import { defineComponent } from 'vue';
import AccountsComponent from '../AccountsComponent/AccountsComponent.vue';
import TransactionsTableComponent from '../TransactionsTableComponent/TransactionsTableComponent.vue';

export default defineComponent({
  name: 'TransactionsPage',
  components: {
    AccountsComponent,
    TransactionsTableComponent
  }
});
