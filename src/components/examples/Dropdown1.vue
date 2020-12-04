<template>
  <dropdown 
    v-model="myValues" 
    desc="Favorite Pizza Topping Dropdown" 
    placeholder="Select Topping"
    :options="options"
  />
  </dropdown>
</template>
<script>
import { Dropdown } from '@phila/phila-ui';
export default {
  components: {
    Dropdown,
  },
  data () {
    return {
      myValues: "",
      options: ["Pepperoni", "Mushroom", "Pineapple"],
    };
  },
};
</script>