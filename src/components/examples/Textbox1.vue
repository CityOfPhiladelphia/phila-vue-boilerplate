<template>
  <textbox
    v-model="value"
    placeholder="My placeholder"
    label="My Label"
    icon="fa fa-search"
    :inner-label="true"
    :is-loading="true"
    :errors="['And you must do something']"
  />
</template>
<script>
import { Textbox } from '@phila/phila-ui';
export default {
  components: {
    Textbox,
  },
  data () {
    return {
      value: "",
    };
  },
};
</script>