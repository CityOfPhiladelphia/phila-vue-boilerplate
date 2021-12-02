<template>
  <div>
    <app-header v-bind="appHeader" :is-sticky="false">
      <tabs-nav slot="tabs-nav">
        <router-link :to="{ name: 'Full1Styles' }"> Styles </router-link>
        <router-link :to="{ name: 'Full1Components' }">
          Components
        </router-link>
      </tabs-nav>
      <dropdown-nav slot="dropdown-nav">
        <button>
          <span class="icon">
            <i class="fa fa-user-circle" />
          </span>
          <span>My Profile</span>
        </button>
        <ul>
          <li>
            <a href="#">Action 1</a>
            <a href="#">Action 2</a>
          </li>
        </ul>
      </dropdown-nav>
      <lang-selector slot="lang-selector-nav" :languages="languages" />
      <mobile-nav slot="mobile-nav">
        <ul>
          <li>
            <a href="#"> Link 1</a>
          </li>
          <li>
            <a href="#"> Link 2</a>
          </li>
          <li class="">
            <a href="#"> Link 3</a>
            <ul>
              <li>
                <a href="#"> Link 3.1</a>
              </li>
              <li>
                <a href="#"> Link 3.2</a>
              </li>
              <li>
                <a href="#" class=""> Link 3.3</a>
                <ul>
                  <li>
                    <a href="#"> Link 3.3.1</a>
                  </li>
                  <li>
                    <a href="#"> Link 3.3.2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </mobile-nav>
    </app-header>
    <main class="container">
      <router-view />
    </main>
    <app-footer :links="footerLinks" :is-sticky="false" />
  </div>
</template>
<script>
import VueI18n from "vue-i18n";
import Vue from "vue";
import {
  AppHeader,
  AppFooter,
  MobileNav,
  TabsNav,
  DropdownNav,
  LangSelector,
} from "@phila/phila-ui";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en-US",
  messages: {
    "en-US": {
      message: {
        hello: "Hello",
      },
    },
    es: {
      message: {
        hello: "Hola",
      },
    },
    it: {
      message: {
        hello: "Ciao",
      },
    },
    "pt-BR": {
      message: {
        hello: "Olá",
      },
    },
  },
});

export default {
  i18n,
  components: {
    AppHeader,
    AppFooter,
    MobileNav,
    TabsNav,
    DropdownNav,
    LangSelector,
  },
  data() {
    return {
      appHeader: {
        appTitle: "My First App",
        appSubtitle: "My app description",
        brandingImage: {
          src: require("../../assets/sample-logo.png"),
          width: "200px",
          height: "auto",
          alt: "My branding image",
        },
      },
      languages: [
        {
          language: "en-US",
          title: "English",
        },
        {
          language: "es",
          title: "Spanish",
        },
        {
          language: "it",
          title: "Italian",
        },
        {
          language: "pt-BR",
          title: "Portuguese (Brazil)",
        },
      ],
      textboxValue: "",
      phoneValue: "",
      checkboxValue: [],
      checkboxes: [ "Checkbox 1", "Checkbox 2", "Checkbox 3" ],
      radioValue: "",
      radioButtons: [ "Radio button 1", "Radio button 2", "Radio button 3" ],
      dropdownValue: "",
      dropdownOptions: [
        "Dropdown Option 1",
        "Dropdown Option 2",
        "Dropdown Option 3",
      ],
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
    };
  },
  methods: {
    toggleErrors(form) {
      this.formErrors[form] = !this.formErrors[form];
    },
  },
};
</script>
<style lang="scss">
.back-to {
  display: none;
}
</style>