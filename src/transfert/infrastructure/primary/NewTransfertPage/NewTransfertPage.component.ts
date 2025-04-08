import { defineComponent, ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import { transfertServiceKey } from '../../../application/TransfertService';

export default defineComponent({
  name: 'NewTransfertPage',
  setup() {
    const router = useRouter();
    const description = ref('');
    const amount = ref('');

    const transfertService = inject(transfertServiceKey);
    if (!transfertService) {
      throw new Error('TransfertService not provided');
    }

    const saveTransfert = async () => {
      try {
        await transfertService.createTransfert({
          description: description.value,
          amount: Number(amount.value),
          type: 'Virement'
        });
        router.push('/');
      } catch (error) {
        console.error('Error saving transfert:', error);
      }
    };

    return {
      description,
      amount,
      saveTransfert
    };
  }
});
