<template>
  <div class="columns is-multiline is-centered">
    <div class="column is-4">
      <vee-input-form
        title="Vee inputs with vee-input-form"
        desc="vee-input-form adds validation observer"
      >
        <vee-textbox
          v-model="veeTextbox"
          placeholder="A Vee-Textbox input"
          :required="validationSettings.includes('required') ? true : undefined"
          :error="validationSettings.includes('errors') ? 'this field is invalid' : ''"
          :mode="validationMode !== '' ? validationMode : 'passive'"
        />
        <vee-dropdown
          v-model="veeDropdown"
          :options="dropdownOptions"
          :required="validationSettings.includes('required') ? true : undefined"
          :error="validationSettings.includes('errors') ? 'this field is invalid' : ''"
          placeholder="A Vee-Dropdown field"
          :mode="validationMode !== '' ? validationMode : 'passive'"
        />
        <div class="is-field-info-important">
          Some importnant information about this field.
        </div>
        <vee-checkbox
          v-model="veeCheckbox"
          :options="checkboxOptions"
          :required="validationSettings.includes('required') ? true : undefined"
          :error="validationSettings.includes('errors') ? 'this field is invalid' : ''"
          label="A Vee-Checkbox group"
          :mode="validationMode !== '' ? validationMode : 'passive'"
        />
        <vee-radio
          v-model="veeRadio"
          :options="radioOptions"
          :required="validationSettings.includes('required') ? true : undefined"
          :error="validationSettings.includes('errors') ? 'this field is invalid' : ''"
          label="A Vee-radio group"
          :mode="validationMode !== '' ? validationMode : 'passive'"
        />
        <div class="is-field-info">
          Some information about this field.
        </div>
        <vee-text-area
          v-model="veeTextarea"
          :required="validationSettings.includes('required') ? true : undefined"
          :error="validationSettings.includes('errors') ? 'this field is invalid' : ''"
          placeholder="A Vee-Text-area field"
          :mode="validationMode !== '' ? validationMode : 'passive'"
        />
        <template v-slot:submit>
          <button class="button is-cta">
            Submit
          </button>
        </template>
      </vee-input-form>
    </div>
    <div class="column is-4">
      <dropdown
        v-model="validationMode"
        :options="validationModes"
        text-key="label"
        value-key="key"
        placeholder="Validation Mode"
        name="modes"
      />
      <h4 class="is-4">
        Field values
      </h4>
      <b>veeTextbox</b>: {{ veeTextbox }}<br>
      <b>veeDropdown</b>: {{ veeDropdown }}<br>
      <b>veeCheckbox</b>: {{ veeCheckbox }}<br>
      <b>veeRadio</b>: {{ veeRadio }}<br>
      <b>veeTextarea</b>: {{ veeTextarea }}<br>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      validationSettings: [],
      settings: [
        {
          label: "Make all required",
          key: "required",
        },
        {
          label: "Add errors",
          key: "errors",
        },
      ],
      validationMode: 'passive',
      validationModes: [
        {
          label: "Passive",
          key: "passive",
        },
        {
          label: "Aggressive",
          key: "aggressive",
        },
        {
          label: "Lazy",
          key: "lazy",
        },
        {
          label: "Eager",
          key: "eager",
        },
      ],
      veeTextbox: "",
      veeDropdown: "",
      dropdownOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
      veeCheckbox: [],
      checkboxOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
      veeRadio: "",
      radioOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
      veeTextarea: "",
    };
  },
  methods: {
  },
};
</script>
