import Vue from 'vue';
import Router from 'vue-router';
import Form1 from '@/components/Form1';
import Form2 from '@/components/Form2';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'form1',
      component: Form1,
    },
    {
      path: '/form2',
      name: 'form2',
      component: Form2,
    },
  ],
});

export default router;
