<template>
  <div id="app">
    <app-header />
    <main class="content">
      <router-view />

      <input-form
        title="Form title"
        desc="Form description"
        :errors="errorCount"
      >
        <phone
          v-model="phoneValue"
          placeholder="Enter phone number"
        />
        <date
          v-model="dateValue"
          placeholder="Enter date"
        />
        <button
          slot="submit"
          class="button is-cta"
          @click.prevent="submitForm"
        >
          Submit
        </button>
      </input-form>
    </main>
  </div>
</template>

<script>
import { AppHeader, InputForm, Phone, Date } from '@phila/phila-ui';

export default {
  name: 'App',
  components: {
    AppHeader,
    InputForm,
    Phone,
    Date,
  },
  data () {
    return {
      phoneValue: '',
      dateValue: '',
    };
  },
  computed: {
    errorCount () {
      const count = 0;
      return count;
    },
  },
  methods: {
    submitForm () {
      if (this.errorCount === 0) {
        alert('Form submitted');
      } else {
        alert('Please fix the errors first');
      }
    },
  },
};
</script>
<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
