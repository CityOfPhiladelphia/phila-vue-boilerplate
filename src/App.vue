<template>
  <div id="app">
    <app-header v-bind="options">
      <tabs-nav slot="tabs-nav">
        <router-link :to="{ name: 'form1' }">
          Form 1
        </router-link>
        <router-link :to="{ name: 'form2' }">
          Form 2
        </router-link>
      </tabs-nav>
      <mobile-nav
        slot="mobile-nav"
        :links="links"
      >
      </mobile-nav>
    </app-header>
    <main id="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import { TabsNav, MobileNav } from '@phila/phila-ui';

export default {
  name: 'App',
  components: {
    TabsNav,
    MobileNav,
  },
  data () {
    return {
      options: {
        appTitle: 'title',
        appSubtitle: 'test',
      },
      links: [
        {
          text: 'Form 1',
          href: 'form1',
        },
        {
          text: 'Form 2',
          href: 'form2',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
