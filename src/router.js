import Vue from 'vue';
import Router from 'vue-router';
import SampleComponent from './components/SampleComponent';
import SampleComponent2 from './components/SampleComponent2';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'sample',
      component: SampleComponent,
    },
    {
      path: '/',
      name: 'sample2',
      component: SampleComponent2,
    },
  ],
});

export default router;
