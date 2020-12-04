import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { ResponsiveHelper } from '@phila/phila-ui';
import * as PhilaUI from '@phila/phila-ui';

Vue.use(ResponsiveHelper);
Vue.use(PhilaUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
