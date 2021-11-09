<template>
  <div class="content">
    <div class="columns is-multiline">
      <div class="column is-half">
        <code>form style 1</code>
        <hr>
        <input-form
          title="A basic form with inner-labels"
          desc="Some more informatiom about this form"
        >
          <textbox
            v-model="textboxValue"
            placeholder="My textbox value"
            desc="Extra info about this field some very long field to test wrapping, line height, and other spacing elements."
            :errors="formErrors.form1 === true ? 'this field is required a very long error message to test line wrapping and line height.' : ''"
          />
          <phone
            v-model="phoneValue"
            placeholder="Phone number"
            :errors="formErrors.form1 === true ? 'this field is required' : ''"
          />
          <checkbox
            v-model="checkboxValue"
            :options="checkboxes"
            label="My group of checkboxes"
            desc="Extra info about these checkboxes"
            :errors="formErrors.form1 === true ? 'this field is required' : ''"
          />
          <checkbox
            v-model="checkboxValue"
            :options="checkboxes"
            label="Small checkboxes"
            desc="Extra info about these checkboxes"
            :errors="formErrors.form1 === true ? 'this field is required' : ''"
            :small="true"
          />
          <radio
            v-model="radioValue"
            :options="radioButtons"
            label="My group of radio buttons"
            desc="Extra info about these radio buttons"
            :errors="formErrors.form1 === true ? 'this field is required' : ''"
          />
          <radio
            v-model="radioValue"
            :options="radioButtons"
            label="Small radio buttons"
            desc="Extra info about these radio buttons"
            :errors="formErrors.form1 === true ? 'this field is required' : ''"
            :small="true"
          />
          <dropdown
            v-model="dropdownValue"
            placeholder="My dropdown"
            :options="dropdownOptions"
            :errors="formErrors.form1 === true ? 'this field is required' : ''"
          />
          <dropdown
            v-model="dropdownValue2"
            placeholder="Dropdown with groups"
            :options="grouppedDropdownOptions2"
            :errors="formErrors.form1 === true ? 'this field is required' : ''"
            :optgroup="true"
          />
          <text-area
            v-model="textAreaValue"
            placeholder="My textArea"
            desc="Extra info about this field"
            :errors="formErrors.form1 === true ? 'this field is required' : ''"
          />
          <div
            slot="submit"
            class="buttons"
          >
            <input
              type="submit"
              value="Toggle Errors"
              class="button is-cta"
              @click.prevent="toggleErrors('form1')"
            >
          </div>
        </input-form>
      </div>
      <div class="column is-half">
        <code>form style 2</code>
        <hr>
        <input-form
          title="A basic form with outter-labels"
          desc="Some more informatiom about this form"
        >
          <textbox
            v-model="textboxValue"
            placeholder="My textbox value"
            label="My textbox value"
            :inner-label="false"
            desc="Extra info about this field"
            :errors="formErrors.form2 === true ? 'this field is required' : ''"
          />
          <phone
            v-model="phoneValue"
            placeholder="Phone number"
            label="Phone number"
            :inner-label="false"
            :errors="formErrors.form2 === true ? 'this field is required' : ''"
          />
          <checkbox
            v-model="checkboxValue"
            :options="checkboxes"
            label="My group of checkboxes"
            desc="Extra info about these checkboxes"
            :errors="formErrors.form2 === true ? 'this field is required' : ''"
          />
          <checkbox
            v-model="checkboxValue"
            :options="checkboxes"
            label="Small checkboxes"
            desc="Extra info about these checkboxes"
            :errors="formErrors.form2 === true ? 'this field is required' : ''"
            :small="true"
          />
          <radio
            v-model="radioValue"
            :options="radioButtons"
            label="My group of radio buttons"
            desc="Extra info about these radio buttons"
            :errors="formErrors.form2 === true ? 'this field is required' : ''"
          />
          <radio
            v-model="radioValue"
            :options="radioButtons"
            label="Small radio buttons"
            desc="Extra info about these radio buttons"
            :errors="formErrors.form2 === true ? 'this field is required' : ''"
            :small="true"
          />
          <dropdown
            v-model="dropdownValue"
            placeholder="My dropdown"
            :inner-label="false"
            label="My dropdown"
            :options="dropdownOptions"
            :errors="formErrors.form2 === true ? 'this field is required' : ''"
          />
          <text-area
            v-model="textAreaValue"
            :inner-label="false"
            placeholder="My textArea"
            label="My textArea"
            desc="Extra info about this field"
            :errors="formErrors.form2 === true ? 'this field is required' : ''"
          />
          <div
            slot="submit"
            class="buttons"
          >
            <input
              type="submit"
              value="Toggle Errors"
              class="button is-cta"
              @click.prevent="toggleErrors('form2')"
            >
          </div>
        </input-form>
      </div>
      <div class="column is-full">
        <code>Callout component</code>
        <hr>
        <callout message="This is the default message" />
        <callout
          message="This is a info message"
          type="info"
        />
        <callout
          message="This is a success message"
          type="success"
        />
        <callout
          message="This is a warning message"
          type="warning"
        />
        <callout
          message="This is a danger message"
          type="danger"
        />
      </div>
      <div class="column is-full">
        <hr>
        <code>Tooltip</code>
        <hr>
        <p>
          Some text with a tooltip
          <tooltip message="My tooltip message" />
        </p>
      </div>
      <!-- <div class="column is-full">
        <hr>
        <code>Modal window</code>
        <hr>
        <div class="buttons">
          <button
            class="button is-primary"
            @click.prevent="openModal('default')"
          >
            Default modal
          </button>
          <button
            class="button is-primary"
            @click.prevent="openModal('customButtons')"
          >
            Modal with custom buttons
          </button>
          <button
            class="button is-danger"
            @click.prevent="openModal('alertModal')"
          >
            Alert modal
          </button>
        </div>
        <vue-final-modal
          v-model="showModal.default"
          v-slot="{ close }"
          name="default"
          :click-to-close="false"
        >
          <modal :close="close" />
        </vue-final-modal>
        <vue-final-modal
          v-model="showModal.customButtons"
          v-slot="{ close }"
          name="customButtons"
          :click-to-close="false"
        >
          <modal :close="close">
            <template slot="actions-before">
              <button class="button is-cta is-secondary">
                Test button
              </button>
            </template>
          </modal>
        </vue-final-modal>
        <vue-final-modal
          v-model="showModal.alertModal"
          v-slot="{ close }"
          name="alertModal"
          :click-to-close="false"
        >
          <modal
            :close="close"
            type="alert"
          />
        </vue-final-modal>
        <hr>
        <code>Table styles with VueGoodTable plugin</code>
        <hr>
        <vue-good-table
          :columns="tColumns"
          :rows="tRows"
          style-class="table"
        />
      </div> -->
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import * as PhilaUI from '@phila/phila-ui';
// import { VueFinalModal } from 'vue-final-modal';
// import 'vue-good-table/dist/vue-good-table.css';
// import { VueGoodTable } from 'vue-good-table';

Vue.use(PhilaUI);

export default {
  components: {
    // VueFinalModal,
    // VueGoodTable,
  },
  data () {
    return {
      appHeader: {
        appTitle: "My First App",
        appSubtitle: "My app description",
        brandingImage: {
          src: require('../../assets/sample-logo.png'),
          width: '200px',
          height: 'auto',
          alt: "My branding image",
        },
      },
      showModal: {
        default: false,
        action: false,
        custom: false,
      },
      languages: [
        {
          language: 'en-US',
          title: 'English',
        },
        {
          language: 'es',
          title: 'Spanish',
        },
        {
          language: 'it',
          title: 'Italian',
        },
        {
          language: 'pt-BR',
          title: 'Portuguese (Brazil)',
        },
      ],
      textboxValue: "",
      phoneValue: "",
      checkboxValue: [],
      checkboxes: [
        "Checkbox 1",
        "Checkbox 2",
        "Checkbox 3",
      ],
      radioValue: "",
      radioButtons: [
        "Radio button 1",
        "Radio button 2",
        "Radio button 3",
      ],
      dropdownValue: "",
      dropdownValue2: "",
      dropdownOptions: [
        "Dropdown Option 1",
        "Dropdown Option 2",
        "Dropdown Option 3",
      ],
      grouppedDropdownOptions: {
        group1: [
          'option1',
          'option2',
          'option3',
        ],
        group2: [
          'option1',
          'option2',
          'option3',
        ],
      },
      grouppedDropdownOptions2: {
        "Group 1": {
          'opt1': 'opt 1',
          'opt2': 'opt 2',
          'opt3': 'opt 3',
        },
        "Group 2": {
          'opt1': 'opt 1',
          'opt2': 'opt 2',
          'opt3': 'opt 3',
        },
      },
      textAreaValue: "",
      footerLinks: [
        {
          type: "native",
          href: "/sample-link",
          text: "Sample Link 1",
        },
        {
          type: "native",
          href: "/sample-link2",
          text: "Sample Link 2",
        },
      ],
      formErrors: {
        form1: false,
        form2: false,
      },
      tColumns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      tRows: [
        { id:1, name:"John", age: 20, createdAt: '2011-10-31',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
    };
  },
  methods: {
    toggleErrors (form) {
      this.formErrors[form] = !this.formErrors[form];
    },
    openModal (modal) {
      this.$set(this.showModal, modal, true);
    },
  },
};
</script>
<style lang="scss">
  @import '@phila/phila-ui/src/assets/styles/scss/vendors/vue-good-table.scss';
  .back-to {
    display: none;
  }

</style>