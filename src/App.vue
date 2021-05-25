<template>
  <div id="app">
    <app-header
      app-title="Date & time picker"
      :is-sticky="false"
    />
    <main>
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <h2 class="title">
              Date-picker
            </h2>
            <div class="subtitle">
              Single date
            </div>
            <date-picker
              v-model="dateValue1"
              v-bind="calOptions1"
            >
              <template v-slot="{ inputValue, inputEvents }">
                <textbox
                  :value="inputValue"
                  icon="fa fa-calendar-alt"
                  placeholder="Select date"
                  readonly
                  v-on="inputEvents"
                />
              </template>
            </date-picker>
            <hr>
            <h2 class="title">
              Date-picker
            </h2>
            <div class="subtitle">
              Date range
            </div>
            <date-picker
              v-model="dateValue2"
              v-bind="calOptions2"
            >
              <template v-slot="{ inputValue, inputEvents }">
                <textbox
                  :value="inputValue.start"
                  icon="fa fa-calendar-alt"
                  readonly
                  placeholder="Start date"
                  v-on="inputEvents.start"
                />
                <textbox
                  :value="inputValue.end"
                  icon="fa fa-calendar-alt"
                  readonly
                  placeholder="End date"
                  v-on="inputEvents.end"
                />
              </template>
            </date-picker>
            <hr>
            <h2 class="title">
              Date-picker
            </h2>
            <div class="subtitle">
              With time selection
            </div>
            <date-picker
              v-model="dateValue3"
              v-bind="calOptions3"
            >
              <template v-slot="{ inputValue, inputEvents }">
                <textbox
                  :value="inputValue"
                  icon="fa fa-calendar-alt"
                  placeholder="Select date"
                  readonly
                  v-on="inputEvents"
                />
              </template>
            </date-picker>
            <hr>
            <h2 class="title">
              Date-picker
            </h2>
            <div class="subtitle">
              With error
            </div>
            <date-picker
              v-model="dateValue4"
              v-bind="calOptions4"
            >
              <template v-slot="{ inputValue, inputEvents }">
                <textbox
                  :value="inputValue"
                  icon="fa fa-calendar-alt"
                  placeholder="Select date"
                  readonly
                  :errors="inputValue ? '' : 'Please select a date'"
                  v-on="inputEvents"
                />
              </template>
            </date-picker>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { AppHeader, Textbox } from '@phila/phila-ui';
import { DatePicker } from 'v-calendar';

export default {
  components: {
    AppHeader,
    Textbox,
    DatePicker,
  },
  data () {
    return {
      dateValue1: '',
      calOptions1: {
        mode: 'date',
        isRange: false,
        popover: {
          keepVisibleOnInput: false,
          visibility: 'focus',
        },
      },
      dateValue2: '',
      calOptions2: {
        mode: 'date',
        isRange: true,
        popover: {
          keepVisibleOnInput: false,
          visibility: 'focus',
        },
      },
      dateValue3: '',
      calOptions3: {
        mode: 'dateTime',
        isRange: false,
        popover: {
          keepVisibleOnInput: false,
          visibility: 'focus',
        },
      },
      dateValue4: '',
      calOptions4: {
        mode: 'dateTime',
        isRange: false,
        popover: {
          keepVisibleOnInput: false,
          visibility: 'focus',
        },
      },
    };
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>