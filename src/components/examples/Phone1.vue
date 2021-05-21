<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <phone v-model="phoneNumber" />
      </div>
    </div>
  </div>
</template>

<script>
import { Phone } from '@phila/phila-ui';
export default {
  components: {
    Phone,
  },
  data () {
    return {
      phoneNumber: '',
    };
  },
};
</script>