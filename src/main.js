import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { AppHeader, AppFooter, ResponsiveHelper } from '@phila/phila-ui';
import * as PhilaUI from '@phila/phila-ui';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

Vue.use(PhilaUI);
Vue.use(ResponsiveHelper);
Vue.use(AppHeader);
Vue.use(AppFooter);

const i18n = new VueI18n({
  locale: 'en-US',
  messages: {
    'en-US': {
    },
  },
});

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
