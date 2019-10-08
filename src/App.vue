<template>
  <div id="app">
    <phila-header app-title="Inmate Locator"/>
    <main class="container main">
      <router-view />
    </main>
    <phila-footer />
  </div>

</template>

<script>

import Footer from './components/Footer';
import Header from './phila-ui/components/Header';

export default {
  name: 'App',
  components: {
    PhilaHeader: Header,
    PhilaFooter: Footer,
  },
};
</script>

<style lang="scss">

@import "./assets/scss/main.scss";

</style>
