<template>
  <div class="columns is-multiline is-centered">
    <div class="column is-4">
      <vee-input-form
        title="Form inputs with vee-input-form"
        desc="vee-input-form adds validation watcher"
      >
        <vee-textbox
          v-model="veeTextbox"
          placeholder="A Vee-Textbox input"
          :required="validationSettings.includes('required') ? true : undefined"
          :error="validationSettings.includes('errors') ? 'this field is invalid' : ''"
          :mode="validationMode !== '' ? validationMode : 'passive'"
        />
        <textbox
          v-model="textbox"
          placeholder="A Textbox input"
          :required="validationSettings.includes('required') ? true : undefined"
          :error="validationSettings.includes('errors') ? 'this field is invalid' : ''"
        />
        <dropdown
          v-model="dropdown"
          :options="dropdownOptions"
          :required="validationSettings.includes('required') ? true : undefined"
          :error="validationSettings.includes('errors') ? 'this field is invalid' : ''"
          placeholder="A dropdown field"
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
        <checkbox
          v-model="checkbox"
          :options="checkboxOptions"
          :required="validationSettings.includes('required') ? true : undefined"
          :error="validationSettings.includes('errors') ? 'this field is invalid' : ''"
          label="A checkbox group"
        />
        <vee-checkbox
          v-model="veeCheckbox"
          :options="checkboxOptions"
          :required="validationSettings.includes('required') ? true : undefined"
          :error="validationSettings.includes('errors') ? 'this field is invalid' : ''"
          label="A Vee-Checkbox group"
          :mode="validationMode !== '' ? validationMode : 'passive'"
        />
        <radio
          v-model="radio"
          :options="radioOptions"
          :required="validationSettings.includes('required') ? true : undefined"
          :error="validationSettings.includes('errors') ? 'this field is invalid' : ''"
          label="A radio group"
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
        <text-area
          v-model="textarea"
          :required="validationSettings.includes('required') ? true : undefined"
          :error="validationSettings.includes('errors') ? 'this field is invalid' : ''"
          placeholder="A Text-area field"
        />
        <vee-text-area
          v-model="veeTextarea"
          :required="validationSettings.includes('required') ? true : undefined"
          :error="validationSettings.includes('errors') ? 'this field is invalid' : ''"
          placeholder="A Vee-Text-area field"
          :mode="validationMode !== '' ? validationMode : 'passive'"
        />
        <template v-slot:submit>
          <button>Submit</button>
        </template>
      </vee-input-form>
    </div>
    <div class="column is-4">
      <checkbox
        v-model="validationSettings"
        :options="settings"
        text-key="label"
        value-key="key"
      />
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
      <b>textbox</b>: {{ textbox }}<br>
      <b>dropdown</b>: {{ dropdown }}<br>
      <b>veeDropdown</b>: {{ veeDropdown }}<br>
      <b>checkbox</b>: {{ checkbox }}<br>
      <b>veeCheckbox</b>: {{ veeCheckbox }}<br>
      <b>radio</b>: {{ radio }}<br>
      <b>veeRadio</b>: {{ veeRadio }}<br>
      <b>textarea</b>: {{ textarea }}<br>
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
      textbox: "",
      veeTextbox: "",
      dropdown: "",
      veeDropdown: "",
      dropdownOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
      checkbox: [],
      veeCheckbox: [],
      checkboxOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
      radio: "",
      veeRadio: "",
      radioOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
      textarea: "",
      veeTextarea: "",
    };
  },
  methods: {
  },
};
</script>
