<template>
  <div class="container">
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
  </div>
</template>
<script>
import { InputForm, Phone, Date } from '@phila/phila-ui';
export default {
  name: "Home",
  components: {
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
      let count = 0;
      return count;
    },
  },
  watch: {

  },
  mounted() {
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