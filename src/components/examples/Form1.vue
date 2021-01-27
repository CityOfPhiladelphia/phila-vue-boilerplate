<template>
  <div class="container">
    <input-form
      title="Form title"
      desc="Form description"
      :errors="errorCount"
    >
      <textbox
        v-model="textboxValue1"
        placeholder="First Name"
        required
        name="Firs Name"
        :errors="!textboxValue1 ? 'this field is required' : ''"
      />
      <textbox
        v-model="textboxValue2"
        placeholder="Last Name"
        required
        :errors="!textboxValue2 ? 'this field is required' : ''"
        name="Last Name"
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
import { InputForm, Textbox } from '@phila/phila-ui';

export default {
  components: {
    InputForm,
    Textbox,
  },
  data () {
    return {
      textboxValue1: "",
      textboxValue2: "",
    };
  },
  computed: {
    errorCount () {
      let count = 0;
      if (this.textboxValue1.length === 0) {
        count++;
      }
      if (this.textboxValue2.length === 0) {
        count++;
      }
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