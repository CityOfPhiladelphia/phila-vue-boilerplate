import Vue from 'vue';
import Router from 'vue-router';
import SampleComponent from './components/SampleComponent';

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
  ],
});

export default router;
