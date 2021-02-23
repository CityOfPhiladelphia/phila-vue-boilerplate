<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <checkbox
          v-model="value"
          label="Checkbox with default options"
        />
        <pre>Selected option(s): {{ value }}</pre>
        <hr>
        <checkbox
          v-model="value1"
          label="Checkbox with array of strings"
          :options="options1"
        />
        <pre>Selected option(s): {{ value1 }}</pre>
        <dropdown
          v-model="ddValue1"
          placeholder="Assign value to checkbox"
          :options="ddOptions1"
          @change="assignValue('value1', ddValue1)"
        />
        <hr>

        <checkbox
          v-model="value2"
          label="Checkbox with key/value object"
          :options="options2"
        />
        <pre>Selected option(s): {{ value2 }}</pre>
        <dropdown
          v-model="ddValue2"
          placeholder="Assign value to checkbox"
          :options="ddOptions2"
          @change="assignValue('value2', ddValue2)"
        />
        <hr>

        <checkbox
          v-model="value3"
          label="Checkbox with array of objects"
          value-key="optionValue"
          text-key="optionText"
          :options="options3"
        />
        <pre>Selected option(s): {{ value3 }}</pre>
        <dropdown
          v-model="ddValue3"
          placeholder="Assign value to checkbox"
          :options="ddOptions3"
          @change="assignValue('value3', ddValue3)"
        />
        <hr>
        <vee-checkbox
          v-model="value4"
          label="Checkbox with validation"
          :options="options4"
          rules="required"
        />
        <pre>Selected option(s): {{ value4 }}</pre>
        <dropdown
          v-model="ddValue4"
          placeholder="Assign value to checkbox"
          :options="ddOptions4"
          @change="assignValue('value4', ddValue4)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { Checkbox, Dropdown } from '@phila/phila-ui';
import { extend, withValidation } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', required);

const VeeCheckbox = withValidation(Checkbox);

export default {
  components: {
    Checkbox,
    VeeCheckbox,
    Dropdown,
  },
  data () {
    return {
      value: [],
      value1: [],
      options1: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
      ddValue1: "",
      ddOptions1: [
        'Option 1',
        'Option 2',
        'Option 3',
      ],
      value2: [],
      options2: {
        option1: 'Option 1',
        option2: "Option 2",
        option3: "Option 3",
      },
      ddValue2: "",
      ddOptions2: [
        'option1',
        'option2',
        'option3',
      ],
      value3: [],
      options3: [
        {
          optionValue: 'option1',
          optionText: 'Option 1',
        },
        {
          optionValue: 'option2',
          optionText: 'Option 2',
        },
        {
          optionValue: 'option3',
          optionText: 'Option 3',
        },
      ],
      ddValue3: "",
      ddOptions3: [
        'option1',
        'option2',
        'option3',
      ],
      value4: [],
      options4: {
        option1: 'Option 1',
        option2: "Option 2",
        option3: "Option 3",
      },
      ddValue4: "",
      ddOptions4: [
        'option1',
        'option2',
        'option3',
      ],
    };
  },
  methods: {
    assignValue (checkbox, value) {
      if (!this[checkbox].includes(value)) {
        this.$set(this[checkbox], this[checkbox].length, value);
      }
    },
  },
};
</script>