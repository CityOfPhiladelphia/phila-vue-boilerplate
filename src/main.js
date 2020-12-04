import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { AppHeader, AppFooter, ResponsiveHelper } from '@phila/phila-ui';

Vue.use(ResponsiveHelper);
Vue.use(AppHeader);
Vue.use(AppFooter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
