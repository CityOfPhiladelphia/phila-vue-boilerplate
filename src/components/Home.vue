<template>
  <div class="container">
    <phone
      v-model="phone"
    />
  </div>
</template>

<script>
import { Phone } from '@phila/phila-ui';

export default {
  name: "Home",
  components: {
    Phone,
  },
  data () {
    return {
      phone: '',
    };
  },
};
</script>