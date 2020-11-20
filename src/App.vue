<template>
  <div id="app">
    <app-header />
    <main id="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    };
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
