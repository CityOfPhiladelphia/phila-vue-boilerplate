<template>
  <div id="app">
    <app-header
      app-title="Demo title"
      :is-sticky="false"
    />
    <main>
      <div class="container">
        Demo code starts here
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
  data () {
    return {};
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>