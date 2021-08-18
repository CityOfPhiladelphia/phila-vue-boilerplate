<template>
  <div id="app">
    <app-header
      app-title="Tooltip demo"
      :is-sticky="false"
    >
      <mobile-nav slot="mobile-nav">
        <ul>
          <li>
            <router-link :to="{ name: 'app' }">
              Auto positioning
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'app2' }">
              Set positions
            </router-link>
          </li>
        </ul>
      </mobile-nav>
      <tabs-nav slot="tabs-nav">
        <router-link :to="{ name: 'app' }">
          Auto positioning
        </router-link>
        <router-link :to="{ name: 'app2' }">
          Set positions
        </router-link>
      </tabs-nav>
    </app-header>
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>

//modal pass heading or remove it
//language dropdown // add default languages
//rework how dropdown works
//add translation to all components

import { AppHeader, MobileNav, TabsNav } from '@phila/phila-ui';

export default {
  components: {
    AppHeader,
    TabsNav,
    MobileNav,
  },
  data () {
    return {};
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>