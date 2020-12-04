<template>
  <textbox
    v-model="value"
    placeholder="My placeholder"
    label="My Label"
    desc="Extra information about this field"
    :inner-label="true"
  >
  </textbox>
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