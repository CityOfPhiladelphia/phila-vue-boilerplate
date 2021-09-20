<template>
  <div id="app">
    <app-header
      app-title="Tooltip demo"
      :is-sticky="false"
    />
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>

import { AppHeader } from '@phila/phila-ui';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>