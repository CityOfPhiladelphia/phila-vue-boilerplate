<template>
  <div id="app">
    <app-header app-title="App Title" />
    <main class="container main">
      <my-component />
    </main>
    <app-footer />
  </div>
</template>

<script>
import MyComponent from './components/MyComponent';

export default {
  name: 'App',
  components: {
    MyComponent,
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
