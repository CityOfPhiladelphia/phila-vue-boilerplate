import Vue from 'vue';
import App from './App.vue';
import 'phila-ui/dist/styles.css';

// import styles from 'phila-ui';

import { Header } from 'phila-ui';

Vue.use(Header, { altName: 'PhlHeader' });

// Vue.use(PhilaUI, {
//   Header: {
//     altName: 'PhlHeader',
//   },
// });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
