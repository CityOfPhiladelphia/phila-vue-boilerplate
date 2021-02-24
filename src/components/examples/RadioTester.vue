<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <radio
          v-model="value"
          label="Small radio buttons with default options"
          :small="isSmall"
        />
        <pre>Selected option(s): {{ value }}</pre>
        <hr>
        <radio
          v-model="value1"
          label="Radio buttons with array of strings"
          :options="options1"
        />
        <pre>Selected option(s): {{ value1 }}</pre>
        <dropdown
          v-model="ddValue1"
          placeholder="Assign value to radio button"
          :options="ddOptions1"
          @change="assignValue('value1', ddValue1)"
        />
        <hr>

        <radio
          v-model="value2"
          label="Radio buttons with key/value object"
          :options="options2"
        />
        <pre>Selected option(s): {{ value2 }}</pre>
        <dropdown
          v-model="ddValue2"
          placeholder="Assign value to radio button"
          :options="ddOptions2"
          @change="assignValue('value2', ddValue2)"
        />
        <hr>

        <radio
          v-model="value3"
          label="Radio buttons with array of objects"
          value-key="optionValue"
          text-key="optionText"
          :options="options3"
        />
        <pre>Selected option(s): {{ value3 }}</pre>
        <dropdown
          v-model="ddValue3"
          placeholder="Assign value to radio button"
          :options="ddOptions3"
          @change="assignValue('value3', ddValue3)"
        />
        <hr>
        <vee-radio
          v-model="value4"
          label="Radio buttons with validation"
          :options="options4"
          rules="required"
        />
        <pre>Selected option(s): {{ value4 }}</pre>
        <dropdown
          v-model="ddValue4"
          placeholder="Assign value to radio button"
          :options="ddOptions4"
          @change="assignValue('value4', ddValue4)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { Radio, Dropdown } from '@phila/phila-ui';
import { extend, withValidation } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', required);

const VeeRadio = withValidation(Radio);

export default {
  components: {
    Radio,
    VeeRadio,
    Dropdown,
  },
  data () {
    return {
      isSmall: true,
      value: '',
      value1: '',
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
      value2: '',
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
      value3: '',
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
      value4: '',
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
    assignValue (radio, value) {
      this[radio] = value;
    },
  },
};
</script>