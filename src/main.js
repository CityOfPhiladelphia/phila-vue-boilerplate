import Vue from 'vue';
import App from './App.vue';
import router from './router';
import * as PhilaUI from '@phila/phila-ui';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email, length, min, numeric } from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('email', email);
extend('numeric', numeric);
extend('length', length);
extend('min', min);
extend('min_array_length', {
  validate(value, args) {
    return value.length >= args.length;
  },
  message (value, args) {
    return `Select at least ${args.length}`;
  },
  params: [ 'length' ],
});
extend('required', {
  ...required,
  message: 'This field is required',
});

Vue.use(PhilaUI, {});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
