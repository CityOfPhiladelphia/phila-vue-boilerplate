<template>
  <div id="app">
    <phl-header app-title="App Title" />
    <main class="container main">
      // Main Content
    </main>
    <phl-footer />
  </div>
</template>

<script>
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    PhlFooter: Footer,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
