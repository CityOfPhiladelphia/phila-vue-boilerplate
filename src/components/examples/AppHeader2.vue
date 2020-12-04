<template>
  <div>
    <app-header
      app-title="Mobile Navigation"
    >
      <mobile-nav slot="mobile-nav">
        <ul>
          <li>
            <router-link :to="{ name: 'home' }">
              Home
            </router-link>
          </li>
          <li>
            <a
              href="https://www.phila.gov"
              target="_blank"
            >Phila.gov</a>
          </li>
        </ul>
      </mobile-nav>
    </app-header>
    <main class="content">
      Mobile navigation is only available on mobile screen sizes (bellow width 768px). Resize and refresh your screen to see it.
    </main>
  </div>
</template>
<script>
import { AppHeader, MobileNav } from '@phila/phila-ui';
export default {
  components: {
    AppHeader,
    MobileNav,
  },
};
</script>