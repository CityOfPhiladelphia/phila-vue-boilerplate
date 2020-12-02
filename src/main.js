import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { ResponsiveHelper } from '@phila/phila-ui';

Vue.use(ResponsiveHelper);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
