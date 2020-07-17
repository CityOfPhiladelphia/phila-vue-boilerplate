<template>
  <div class="columns is-multiline is-centered">
    <div class="column is-5">
      <h3 class="is-size-4 title">
        Registration Form
      </h3>
      <vee-input-form>
        <fieldset>
          <legend>Your profile information</legend>
          <div class="field">
            <vee-textbox
              v-model="firstName"
              placeholder="First name"
              required
            />
          </div>
          <div class="field">
            <vee-textbox
              v-model="lastName"
              placeholder="Last name"
              required
            />
          </div>
          <div class="field">
            <vee-textbox
              v-model="streetAddress"
              placeholder="Street address"
              required
            />
          </div>
          <div class="field">
            <vee-textbox
              v-model="city"
              placeholder="City"
              required
            />
          </div>
          <div class="columns is-gapless">
            <div class="column is-two-thirds">
              <vee-dropdown
                v-model="state"
                :options="states"
                placeholder="State"
                required
              />
            </div>
            <div class="column is-one-third">
              <div class="field">
                <vee-textbox
                  v-model="zip"
                  placeholder="Zip code"
                  required="numeric"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Your login Information</legend>
          <div class="field">
            <vee-textbox
              v-model="email"
              placeholder="E-mail"
              required
              rules="email"
            />
          </div>
          <div class="is-field-info-important">
            <b>Password</b> must be 12 characters long and contain at least:<br>
            - one upper case (A-Z)<br>
            - one lower case (a-z)<br>
            - one number (0-9)<br>
            - one special character (e.g. !@#$)
          </div>
          <div class="field">
            <vee-textbox
              v-model="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
        </fieldset>
        <div class="field">
          <checkbox
            v-model="agreement"
            :options="agreementOptions"
            label="Terms & Conditions"
            desc="You must agree to a whole bunch of things by clicking the checkbox below."
          />
        </div>
      </vee-input-form>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      firstName: "",
      lastName: "",
      streetAddress: "",
      city: "",
      state: "",
      states: [
        "PA",
        "Not PA",
      ],
      zip: "",
      email: "",
      password: "",
      agreement: [],
      agreementOptions: {
        "yes": "if I must",
      },
    };
  },
  methods: {
  },
};
</script>
