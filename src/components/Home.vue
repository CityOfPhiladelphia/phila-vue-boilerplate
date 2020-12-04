<template>
  <div>
    <app-header
      app-title="PhilaUI"
      app-subtitle="Components examples"
    />
    <main class="content">
      <div class="container">
        <h2>Current examples</h2>
        <ul>
          <template v-for="route in this.$router.options.routes">
            <template v-if="route.name === 'examples'">
              <li
                v-for="example in route.children"
                :key="example.path"
              >
                <router-link :to="{ name: `${example.name}` }">
                  {{ example.meta.label }}
                </router-link>
              </li>
            </template>
          </template>
        </ul>
      </div>
    </main>
    <app-footer
      :links="footerLinks"
    />
  </div>
</template>
<script>
import { AppHeader, AppFooter } from '@phila/phila-ui';
export default {
  name: 'Home',
  components: {
    AppHeader,
    AppFooter,
  },
  data () {
    return {
      footerLinks: [
        {
          href: 'home',
          text: 'Home',
        },
      ],
    };
  },
};
</script>