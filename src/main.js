import Vue from 'vue';
import App from './App.vue';
import * as PhilaUI from 'phila-ui';

Vue.use(PhilaUI, {});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
