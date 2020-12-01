import Vue from 'vue';
import Router from 'vue-router';
import Form1Component from './components/Form1Component';
import Form2Component from './components/Form2Component';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/form1',
      name: 'form1',
      component: Form1Component,
    },
    {
      path: '/form2',
      name: 'form2',
      component: Form2Component,
    },
  ],
});

export default router;
