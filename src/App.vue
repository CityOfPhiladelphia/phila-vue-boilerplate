<template>
  <div id="app">
    <app-header
      app-title="User content"
      :is-sticky="false"
    >
      <tabs-nav slot="tabs-nav">
        <router-link to="/">
          All tags
        </router-link>
        <router-link to="/sample1">
          Sample 1
        </router-link>
        <router-link to="/sample2">
          Sample 2
        </router-link>
      </tabs-nav>
    </app-header>
    <main>
      <div class="container">
        <div class="content">
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { AppHeader, TabsNav } from '@phila/phila-ui';

export default {
  components: {
    AppHeader,
    TabsNav,
  },
  data () {
    return {};
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>