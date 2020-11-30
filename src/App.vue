<template>
  <div id="app">
    <app-header v-bind="options">
      <tabs-nav slot="tabs-nav">
        <!-- <a href="#">Test</a> -->
        <router-link :to="{ name: 'sample' }">
          My first tab
        </router-link>
        <router-link :to="{ name: 'sample2' }">
          My second tab
        </router-link>
      </tabs-nav>
    </app-header>
    <main id="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import { TabsNav } from '@phila/phila-ui';

export default {
  name: 'App',
  components: {
    TabsNav,
  },
  data () {
    return {
      options: {
        appTitle: 'title',
        appSubtitle: 'test',
      }
    };
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
