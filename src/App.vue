<template>
  <div id="app">
    <app-header
      app-title="App Title"
      app-subtitle="City Of Philadelphia Long Subtitle"
    >
      <template v-slot:mobile-menu>
        <mobile-menu>
          <div class="navbar-item">
            <a
              href=""
              class="button"
            >Link 1</a>
          </div>
          <div class="navbar-item">
            <a
              href=""
              class="button"
            >Link 2</a>
          </div>
          <div class="navbar-item">
            <a
              href=""
              class="button"
            >Link 3</a>
          </div>
        </mobile-menu>
      </template>
      <div class="navbar-item">
        <a
          href=""
          class="button"
        >Link 1</a>
      </div>
      <div class="navbar-item">
        <a
          href=""
          class="button"
        >Link 2</a>
      </div>
      <div class="navbar-item">
        <a
          href=""
          class="button"
        >Link 3</a>
      </div>
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
