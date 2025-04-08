import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import AccountsComponent from '../AccountsComponent/AccountsComponent.vue';
import TransactionsTableComponent from '../TransactionsTableComponent/TransactionsTableComponent.vue';

export default defineComponent({
  name: 'TransactionsPage',
  components: {
    AccountsComponent,
    TransactionsTableComponent
  },
  setup() {
    const router = useRouter();

    const navigateToNewTransfert = () => {
      router.push('/new-transfert');
    };

    return {
      navigateToNewTransfert
    };
  }
});
