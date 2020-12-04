import Vue from 'vue';
import App from './App.vue';
import router from './router';
import * as PhilaUI from '@phila/phila-ui';
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import VueI18n from "vue-i18n";

extend('required', required);
Vue.use(PhilaUI);

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "en-US",
  messages: {
    "en-US": {},
  },
});

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
