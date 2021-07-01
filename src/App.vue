<template>
  <div id="app">
    <app-header />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import { AppHeader } from '@phila/phila-ui';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
  data () {
    return {
    };
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
