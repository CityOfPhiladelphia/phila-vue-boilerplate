<template>
  <div>
    <app-footer>
      <ul>
        <li><a href="https://phila.gov">Phila.gov</a></li>
        <li>
          <router-link :to="{ name: 'home' }">
            Home Page
          </router-link>
        </li>
      </ul>
    </app-footer>
    <main />
  </div>
</template>
<script>
import { AppFooter } from '@phila/phila-ui';
export default {
  components: {
    AppFooter,
  },
};
</script>