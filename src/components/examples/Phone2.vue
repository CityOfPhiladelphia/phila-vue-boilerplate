<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <vee-phone
          v-model="phoneNumber"
          rules="phone"
          name="Phone number"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Phone } from '@phila/phila-ui';
import { extend, withValidation, setInteractionMode } from 'vee-validate';

setInteractionMode('aggressive');

const VeePhone = withValidation(Phone);
extend('phone', value => {
  return /\(\d{3}\) \d{3} - \d{4}/gi.test(value);
});

export default {
  components: {
    VeePhone,
  },
  data () {
    return {
      phoneNumber: '',
    };
  },
};
</script>