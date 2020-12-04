<template>
  <textbox
    v-model="value"
    placeholder="My placeholder 2"
    label="My Label"
    icon="fa fa-search"
    :inner-label="true"
    :is-loading="true"
    rules="required"
    mode="aggressive"
    name="field name"
  />
</template>
<script>

// import Vue from 'vue';
// import { Textbox, Checkbox, addValidationTo } from '@phila/phila-ui';
// import { withValidation } from 'vee-validate';

// let VeeTextbox = withValidation(Textbox);

export default {
  components: {
    // VeeTextbox,
  },
  data () {
    return {
      value: "",
    };
  },
};
</script>