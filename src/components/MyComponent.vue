<template>
  <div class="section">
    <div class="columns is-multiline">
      <div class="column is-5">
        <button class="button">
          Primary Button
        </button><br><br>
        <button class="button is-secondary is-simple">
          Secondary Button
        </button><br><br>
        <button class="button">
          <span class="icon"><i class="fa fa-plus" /></span>
          <span>Primary Icon before</span>
        </button><br><br>
        <button class="button is-secondary">
          <span class="icon"><i class="fa fa-plus" /></span>
          <span>Secondary Icon before</span>
        </button><br><br>
        <button class="button">
          <span>Primary Icon after</span>
          <span class="icon"><i class="fa fa-plus" /></span>
        </button><br><br>
        <button class="button is-secondary">
          <span>Secondary Icon after</span>
          <span class="icon"><i class="fa fa-plus" /></span>
        </button><br>
        <ValidationObserver v-slot="validation">
          <input-form
            :validation="validation"
            @submit.prevent="onSubmit"
          >
            <fieldset>
              <legend>Contact Information</legend>
              <div class="field">
                <div class="control">
                  <vee-textbox
                    v-model="textboxvalue"
                    required
                    mode="eager"
                    name="First Name"
                    rules="required"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <vee-textbox
                    v-model="textboxvalue2"
                    required
                    rules="required"
                  />
                </div>
              </div>
              <div class="is-input-instructions" />
              <div class="field">
                <vee-radio
                  v-model="radioGroupSave"
                  :options="{ 'Residential': 'Residential', 'Daycare': 'Daycare', 'Something': 'Something' }"
                  class="is-grouped radio-wrap required"
                  required
                  rules="required"
                  num-of-columns="2"
                >
                  <template v-slot:group-label>
                    Select an option below
                  </template>
                </vee-radio>
              </div>

              <div class="field">
                <div class="control">
                  <vee-dropdown
                    v-model="selectedValue"
                    :options="{ three: 'O2ne', tweo: 'Twdo'}"
                    default-option="Age"
                    required
                    rules="required"
                  />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>Contact Information</legend>
              <div class="field">
                <div class="control">
                  <vee-text-area
                    v-model="textareaValue"
                    required
                    placeholder="Hello"
                    rules="required|email"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <!-- <text-area /> -->
                </div>
              </div>
              <div class="field">
                <vee-checkbox
                  v-model="checkboxValue"
                  :options="{ 'Residential': 'Residential', 'Daycare': 'Daycare', 'Something': 'Something' }"
                  num-of-columns="2"
                  required
                  rules="required|min_array_length:2"
                >
                  <template v-slot:group-label>
                    Select an option below
                  </template>
                  <template v-slot:group-desc>
                    Do something
                  </template>
                </vee-checkbox>
              </div>
            </fieldset>
            <template v-slot:submit>
              <button
                type="submit"
                @click.prevent="validation.validate"
              >
                Submit
              </button>
              <template />
            </template>
          </input-form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      textboxvalue: '',
      textboxvalue2: '',
      selectedValue: '',
      checkboxValue: [],
      checkboxValue2: [],
      radioGroupSave: '',
      radioGroupSave2: '',
      textareaValue: '',
    };
  },
  methods: {
    onSubmit() {
      console.log('done');
    },
  },
};
</script>
<style lang="scss" scoped>
  // Your Styles Here
</style>
