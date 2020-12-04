<template>
  <div>
    <radio v-model="myValues" label="Favorite Pizza Topping" :options="options"
    />
    You chose: {{ myValues }}
  </div>
</template>
<script>
import { Radio } from '@phila/phila-ui';
export default {
  components: {
    Radio,
  },
  data () {
    return {
      myValues: "",
      options: ["Pepperoni", "Mushroom", "Pineapple"],
    };
  },
};
</script>