<template>
  <div id="app">
    <app-header v-bind="options">
      <tabs-nav slot="tabs-nav">
        <a href="wut">cool</a>
        <router-link :to="{ name: 'sample' }">
          yeah
        </router-link>
        <router-link :to="{ name: 'sample2' }">
          sample2
        </router-link>
      </tabs-nav>
      <tabs-nav 
      slot="tabs-nav"
      :links="tabs"/>
      <dropdown-nav slot="dropdown-nav">
        <button>My acct</button>
        <ul>
          <li><a href="#">whatever</a></li>
        </ul>
      </dropdown-nav>
    </app-header>
    <main id="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import { TabsNav, DropdownNav } from '@phila/phila-ui';

export default {
  name: 'App',
  components: {
    TabsNav,
    DropdownNav
  },
  data () {
    return {
      options: {
        appTitle: "My custom app", 
        appSubtitle: "Cool sub description",
      },
      tabs: [
        {
          href: "/",
          text: "link 1",
          active: true,
          attrs: {
            name: "stuff",
          }
        }
      ]
    };
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
