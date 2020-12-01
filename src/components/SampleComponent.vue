<template>
  <div class="columns">
    <div class="column">
      <validation-observer
        ref="form1"
        v-slot="{ errors }"
      >
        <input-form :errors="errors">
          <textbox-with-validation
            v-model="textboxValue"
            required
            rules="required"
            name="my textbox"
            mode="passive"
          />
          <button
            slot="submit"
            class="button is-cta"
            @click.prevent="submitContent"
          >
            Submit
          </button>
        </input-form>
      </validation-observer>
    </div>
  </div>
</template>
<script>
import { withValidation, ValidationObserver } from 'vee-validate';
import { Textbox, InputForm } from '@phila/phila-ui';

import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

// No message specified.
extend('email', email);

// Override the default message.
extend('required', required);

const TextboxWithValidation = withValidation(Textbox);

export default {
  name: "SampleComponent",
  components: {
    TextboxWithValidation,
    ValidationObserver,
    InputForm,
  },
  data () {
    return {
      textboxValue: '',
    };
  },
};
</script>