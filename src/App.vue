<template>
  <div id="app">
    <app-header
      app-title="App Title"
      app-subtitle="City Of Philadelphia Long Subtitle"
    >
      <template v-slot:mobile-menu>
        <mobile-menu>
          <!-- Mobile Menu Goes Here -->
        </mobile-menu>
      </template>
      <!-- Regular Desktop Menu Goes Here -->
    </app-header>
    <main class="container main">
      <my-component />
    </main>
    <app-footer :links="[{href: '/', text: 'Feedback'}]" />
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
