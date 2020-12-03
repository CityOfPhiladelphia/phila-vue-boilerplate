<template>
  <ValidationObserver 
    v-slot="{ errors }" 
    tag="div" 
  >
    <input-form
      title="My form title" 
      description="My form description"
      :errors="errors"
      :required="true"
      :error-messages="errors"
    >
      <ValidationProvider
        rules="required"
        :error="validationSettings.includes('errors') ? 'this field is invalid' : ''"
      >
        <textbox v-model="myTextbox" />
        <button class="is-cta">
          Submit
        </button>
      </ValidationProvider>
    </input-form>
  </ValidationObserver>
</template>
<script>
import { InputForm, Textbox } from '@phila/phila-ui';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
extend('required', {
  ...required,
  message: 'This field is required',
});
export default {
  components: {
    InputForm,
    Textbox,
    ValidationObserver,
    ValidationProvider,
  },
  data () {
    return {
      values: [],
      validationSettings: [],
      options: [],
      myTextbox: "",
      settings: [
        {
          label: "Make all required",
          key: "required",
        },
        {
          label: "Add errors",
          key: "errors",
        },
      ],
    };
  },
};
</script>