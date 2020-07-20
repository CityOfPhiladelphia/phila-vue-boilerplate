import Vue from 'vue';
import Router from 'vue-router';
import Form1 from '@/components/Form1';
import Form2 from '@/components/Form2';
import Form3 from '@/components/Form3';

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
    {
      path: '/form3',
      name: 'form3',
      component: Form3,
    },
  ],
});

export default router;
