<template>
  <div class="columns is-multiline is-centered">
    <div class="column is-8">
      <input-form>
        <fieldset>
          <legend>Your name:</legend>
          <div class="columns is-gapless">
            <div class="column is-half">
              <div class="field">
                <vee-textbox
                  v-model="field1"
                  label="eager"
                  placeholder="First Name"
                  rules="email"
                  mode="eager"
                />
              </div>
            </div>
            <div class="column is-half">
              <div class="field">
                <vee-textbox
                  v-model="field2"
                  label="eager"
                  placeholder="Last Name"
                  rules="email"
                  mode="eager"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Your address:</legend>
          <div class="columns is-multiline is-gapless">
            <div class="column is-full">
              <div class="field">
                <vee-textbox
                  v-model="field1"
                  label="eager"
                  placeholder="Street"
                  rules="email"
                  mode="eager"
                />
              </div>
            </div>
            <div class="column is-full">
              <div class="field">
                <vee-textbox
                  v-model="field2"
                  label="eager"
                  placeholder="Street 2"
                  rules="email"
                  mode="eager"
                />
              </div>
            </div>
            <div class="column is-half">
              <div class="field">
                <vee-textbox
                  v-model="field2"
                  label="eager"
                  placeholder="City"
                  rules="email"
                  mode="eager"
                />
              </div>
            </div>
            <div class="column is-half">
              <div class="field">
                <vee-dropdown
                  v-model="field5"
                  placeholder="State"
                  :options="field5Options"
                  label="eager"
                  rules="required"
                  mode="eager"
                />
              </div>
            </div>
          </div>
        </fieldset>
      </input-form>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      validation: false,
      field1: '',
      field2: '',
      field3: '',
      field4: '',
      field5: '',
      field5Options: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
      field6: '',
      field6Options: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
      field7: '',
      field7Options: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
      field8: '',
      field8Options: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
      submit: '',
    };
  },
  methods: {
    async validateThis () {
      let valid = await this.$refs['rf'].validate();
    },
    submitIt() {
      this.submit = 'All Done';
    },
  },
};
</script>
