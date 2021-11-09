import '@phila/phila-ui/src/utils/polyfills/element-remove';
import '@phila/phila-ui/src/utils/polyfills/em.array.find-index';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { ResponsiveHelpers } from '@phila/phila-ui';

Vue.use(ResponsiveHelpers);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
