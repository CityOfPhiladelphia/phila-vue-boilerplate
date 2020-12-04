<template>
  <checkbox
    v-model="values"
    label="My Label"
    text-key="key1"
    value-key="key2"
    :options="options"
  />
</template>
<script>
import { Checkbox } from '@phila/phila-ui';
export default {
  components: {
    Checkbox,
  },
  data () {
    return {
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