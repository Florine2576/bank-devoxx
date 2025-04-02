import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'NavbarComponent',
  setup() {
    const router = useRouter();

    const navigateTo = (route: string) => {
      router.push(route);
    };

    return {
      navigateTo
    };
  }
});
