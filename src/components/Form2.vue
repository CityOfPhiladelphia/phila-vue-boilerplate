<template>
  <div class="columns is-multiline is-centered">
    <div class="column is-4">
      <ValidationObserver v-slot="validation">
        <input-form
          :validation="validation"
        >
          <fieldset>
            <legend>Contact Info with Validation</legend>
            <div class="field">
              <div class="control">
                <vee-textbox
                  v-model="field1"
                  placeholder="Full Name"
                  required
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <vee-textbox
                  v-model="field2"
                  placeholder="Email"
                  rules="required|email"
                  required
                />
              </div>
            </div>
            <div class="is-input-instructions" />
            <div class="field">
              <vee-radio
                v-model="field3"
                :options="field3Options"
                class="is-grouped radio-wrap required"
                num-of-columns="1"
                label="Do you live in Philadelphia?"
                required
                rules="required"
              >
                <template v-slot:group-label />
              </vee-radio>
            </div>
            <div class="field">
              <div class="control">
                <vee-dropdown
                  v-model="field4"
                  :options="field4Options"
                  placeholder="Are you sure you live in Philadelphia?"
                  required
                  rules="required"
                />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>More info about you:</legend>
            <div class="field">
              <div class="control">
                <vee-text-area
                  v-model="field5"
                  placeholder="Your comments"
                  required
                  rules="required"
                />
              </div>
            </div>
            <div class="field">
              <vee-checkbox
                v-model="field6"
                :options="field6Options"
                num-of-columns="2"
                required
                :error-messages="{ required: 'Please do something?' }"
              >
                <template v-slot:label>
                  Checking checkboxes:
                </template>
                <template v-slot:desc>
                  Check as many checkboxes as you want
                </template>
              </vee-checkbox>
            </div>
          </fieldset>
          <template v-slot:submit>
            <button
              type="submit"
              @click.prevent="submitIt(validation)"
            >
              Submit
            </button>
          </template>
        </input-form>
      </ValidationObserver>
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
      field3Options: {
        'yes': 'Yes',
        'no': 'No',
      },
      field4: '',
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
    submitIt(validation) {
      console.log(validation.validate());
      if (validation.validate()) {
        this.submit = 'All Done';
      } else {
        this.submit = 'Issues';
      }

    },
  },
};
</script>
