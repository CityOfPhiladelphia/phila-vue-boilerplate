<template>
  <div id="app">
    <app-header
      app-title="Phone input review"
      :is-sticky="false"
    />
    <main>
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <h2 class="title">
              Phone input
            </h2>
            <div class="subtitle">
              Basic setup. Formatting is done automatically, but the field is not validated.
            </div>
            <phone v-model="phoneNumber1" />
            <h2 class="title">
              Phone input with validation
            </h2>
            <div class="subtitle">
              Checks to make sure a phone number was entered, and then checks to make sure the format is correct. Click on the input to focus, and then click somewhere else without a valid number to see the error message.
            </div>
            <vee-phone
              v-model="phoneNumber2"
              rules="required|phone"
              name="Phone number"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { AppHeader, Phone } from '@phila/phila-ui';
import { required } from 'vee-validate/dist/rules';
import { extend, withValidation, setInteractionMode } from 'vee-validate';

setInteractionMode('eager');

const VeePhone = withValidation(Phone);

extend('phone', value => {
  return /\(\d{3}\) \d{3} - \d{4}/gi.test(value);
});

extend('required', {
  ...required,
  message: 'Phone number is required',
});

export default {
  components: {
    AppHeader,
    Phone,
    VeePhone,
  },
  data () {
    return {
      phoneNumber1: '',
      phoneNumber2: '',
    };
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>