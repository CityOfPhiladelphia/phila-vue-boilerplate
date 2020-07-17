<template>
  <div class="columns is-multiline is-centered">
    <div class="column is-5">
      <vee-input-form
        ref="myform"
        @submit.prevent="submitIt()"
      >
        <div class="field">
          <vee-dropdown
            v-model="field3"
            :options="field3Options"
            mode="eager"
            rules="required"
            required
            placeholder="Select something"
          />
        </div>
        <br>
        <template v-slot:submit>
          <button
            type="submit"
            class="button"
          >
            Submit
          </button>
        </template>
      </vee-input-form>
      </textbox>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      field1: '',
      field2: '',
      field3: '',
      field4: '',
      field3Options: {
        'yes': 'Yes',
        'no': 'No',
      },
      field4Options: {
        'yes': 'Yes',
        'no': 'No',
      },
      field5: '',
      field6: [],
      field6Options: {
        'check1': 'Check this one',
        'check2': 'Check me!',
        'check3': 'Pick me!',
        'check4': 'Me too!',
      },
      submit: '',
    };
  },
  methods: {
    async submitIt() {
      let valid = await this.$refs['myform'].validate();
    },
    onblur () {
      console.log('blur');
    },
  },
};
</script>
