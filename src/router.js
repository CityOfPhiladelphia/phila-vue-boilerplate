import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "app",
      component: () => import('./Auto.vue'),
    },
    {
      path: "/auto",
      name: "app2",
      component: () => import('./Set.vue'),
    },
  ],
});