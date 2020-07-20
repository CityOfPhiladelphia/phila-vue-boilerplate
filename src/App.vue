<template>
  <div id="app">
    <app-header
      app-title="App Title"
      app-subtitle="City Of Philadelphia Long Subtitle"
    >
      <div class="navbar-item">
        <router-link :to="{ name: 'form1' }">
          Form 1
        </router-link>
      </div>
      <div class="navbar-item">
        <router-link :to="{ name: 'form2' }">
          Form 2
        </router-link>
      </div>
      <div class="navbar-item">
        <router-link :to="{ name: 'form3' }">
          Form 3
        </router-link>
      </div>
    </app-header>
    <main class="container main">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
