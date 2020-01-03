import Vue from 'vue';
import App from './App.vue';
import router from './router';
import * as PhilaUI from '@CityOfPhiladelphia/phila-ui';

Vue.use(PhilaUI, {});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
