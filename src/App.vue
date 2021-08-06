<template>
  <div id="app">
    <app-header
      app-title="Demo title"
      :is-sticky="false"
    />
    <main>
      <div class="container">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem esse quas optio nesciunt sequi aliquam doloribus quasi asperiores ipsum fugiat nulla dolor, debitis nam earum corporis odit perferendis numquam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem esse quas optio nesciunt sequi aliquam doloribus quasi asperiores ipsum fugiat nulla dolor, debitis nam earum corporis odit perferendis numquam!</p>
        <br>
        <div class="buttons">
          <button
            class="button is-primary"
            @click.prevent="showModal1 = true"
          >
            default modal
          </button>
          <button
            class="button is-primary"
            @click.prevent="showModal2 = true"
          >
            alert modal
          </button>
          <button
            class="button is-primary"
            @click.prevent="showModal3 = true"
          >
            custom modal
          </button>
        </div>
        <vue-final-modal
          v-model="showModal1"
          v-slot="{ close }"
          :click-to-close="false"
          :esc-to-close="true"
        >
          <modal
            :close="close"
          >
            <template slot="title">
              My default window
            </template>
            <slot>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget. luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget. luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>
            </slot>
          </modal>
        </vue-final-modal>
        <vue-final-modal
          v-model="showModal2"
          v-slot="{ close }"
          :click-to-close="false"
          :esc-to-close="true"
        >
          <modal
            :close="close"
            type="alert"
            @deleteAction="alert('delete button clicked')"
          >
            <template slot="title">
              My alert window
            </template>
            <slot>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget. luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget. luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>
            </slot>
          </modal>
        </vue-final-modal>
        <vue-final-modal
          v-model="showModal3"
          v-slot="{ close }"
          :click-to-close="false"
          :esc-to-close="true"
        >
          <modal
            :close="close"
            type="none"
            :hide-close-button="true"
          >
            <template slot="title">
              My custom window
            </template>
            <slot>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>
            </slot>
            <template slot="actions-before">
              <button
                class="button is-cta is-large"
                @click.prevent="alert('custom button clicked')"
              >
                Custom button
              </button>
            </template>
          </modal>
        </vue-final-modal>
      </div>
    </main>
  </div>
</template>

<script>

import { AppHeader, Modal } from '@phila/phila-ui';
import { VueFinalModal } from 'vue-final-modal';

export default {
  components: {
    AppHeader,
    Modal,
    VueFinalModal,
  },
  data () {
    return {
      showModal1: false,
      showModal2: false,
      showModal3: false,
    };
  },
  methods: {
    alert (msg) {
      window.alert(msg);
    },
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>