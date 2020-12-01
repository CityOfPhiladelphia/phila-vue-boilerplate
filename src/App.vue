<template>
  <div id="app">
    <app-header v-bind="options">
      <!-- <lang-selector
        slot="lang-selector-nav"
        :languages="langs"
      /> -->
      <mobile-nav slot="mobile-nav">
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
            <ul>
              <li>
                <a href="#">Link 4</a>
              </li>
              <li>
                <a href="#">Link 5</a>
                <ul>
                  <li>
                    <a href="#">Link 6</a>
                  </li>
                  <li>
                    <a href="#">Link 7</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </mobile-nav>
      <!-- <tabs-nav
        slot="tabs-nav"
        :links="tabs"
      /> -->
      <!-- <a
          href="#"
        >Test</a>
        <router-link :to="{ name: 'sample'}">
          My first tab
        </router-link>
        <router-link :to="{ name: 'sample2'}">
          My first tab 2
        </router-link> -->
      <!-- </dropdown-nav> -->
      <!-- <dropdown-nav slot="dropdown-nav">
        <button>
          <span class="icon">
            <i class="fa fa-user-circle" /></span>
          <span> My Account</span>
        </button>
        <ul>
          <li>
            <a href="#">Sample 1</a>
          </li>
          <li>
            <a href="#">Sample 2</a>
          </li>
        </ul>
      </dropdown-nav> -->
    </app-header>
    <main id="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import { TabsNav, DropdownNav, LangSelector, MobileNav } from '@phila/phila-ui';

export default {
  name: 'App',
  components: {
    MobileNav,
    DropdownNav,
    LangSelector,
  },
  data () {
    return {
      options: {
        appTitle: "My Custom App",
        appSubtitle: "My app description",
        // brandingImage: {
        //   src: require('./assets/sample-logo.png'),
        //   width: 180,
        //   height: "auto",
        // },
        // brandingLink: {
        //   href: "/",
        // },
      },
      tabs: [
        {
          type: 'native',
          href: "/",
          text: "Link 1",
          active: true,
          attrs: {
            title: "My link title",
          },
        },
      ],
      langs: [
        {
          language: "en-US",
          title: "English",
        },
        {
          language: "es",
          title: "Spanish",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
