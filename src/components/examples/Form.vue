<template>
  <ValidationObserver tag="div" v-slot="{ errors }">
    <input-form
      title="Phila UI Form" 
      description="My form description"
      :errors="errors"
    >
      <vee-textbox 
        v-model="myTextbox"
        mode="eager"
        rules="required"
      />
      <vee-checkbox 
        v-model="values"
        rules="required"
        :options="options"
        text-key="key1"
        value-key="key2"
        mode="eager"
      />
      <button 
        class="is-cta button"
        @click.prevent=""
      >
        Submit
      </button>
    </input-form>
  </ValidationObserver>
</template>
<script>
import { InputForm, Textbox, Checkbox } from '@phila/phila-ui';

//Import withValidation, ValidationObserver for the form, extend for the rules
import { ValidationObserver, withValidation, extend } from 'vee-validate';

//Import required rule and extend.
import { required } from 'vee-validate/dist/rules';
extend('required', {
  ...required,
  message: 'This field is required',
});

//Add validation to Textbox and Checkbox
const VeeTextbox = withValidation(Textbox);
const VeeCheckbox = withValidation(Checkbox);

export default {
  components: {
    InputForm,
    ValidationObserver,
    VeeTextbox,
    VeeCheckbox,

  },
  data () {
    return {
      myTextbox: "",
      values: [],
      options: [
        {
          'key1': 'My checkbox 1',
          'key2': 'my-checkbox-value-1',
        },
        {
          'key1': 'My checkbox 2',
          'key2': 'my-checkbox-value-2',
        },
      ],
    };
  },
};
</script>