<template>
  <div id="app">
    <app-header>
      <main class="content">
        <router-view />
      </main>
    </app-header>
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
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
