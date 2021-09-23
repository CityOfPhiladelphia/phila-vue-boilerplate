import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('./pages/home.vue'),
    },
    {
      path: "/sample1",
      name: "sample1",
      component: () => import('./pages/sample1.vue'),
    },
    {
      path: "/sample2",
      name: "sample2",
      component: () => import('./pages/sample2.vue'),
    },
  ],
});