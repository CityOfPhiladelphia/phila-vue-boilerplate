<template>
<text-area
  v-model="myValue" 
  placeholder="Type in this text area."
  label="The label for the text area."
  desc="This is the description of the text area."
  :inner-label="true"
>
</text-area>
</template>
<script>
import { TextArea } from '@phila/phila-ui';
export default {
  components: {
    TextArea,
  },
  data () {
    return {
      myValues: "",
    };
  },
};
</script>