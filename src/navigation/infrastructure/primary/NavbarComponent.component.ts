import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'NavbarComponent',
  setup() {
    const route = useRoute();

    const isActive = (path: string) => computed(() => route.path === path);

    return {
      isActive
    };
  }
});
