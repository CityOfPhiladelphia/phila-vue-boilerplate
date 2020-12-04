import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/Home"),
    },
    {
      path: "/examples",
      name: "examples",
      component: () => import("@/components/Examples"),
      children: [
        {
          path: "app-header-1",
          name: "app-header-1",
          component: () => import("@/components/examples/AppHeader1"),
          meta: {
            label: 'Application Header basic',
          },
        },
        {
          path: "app-header-2",
          name: "app-header-2",
          component: () => import("@/components/examples/AppHeader2"),
          meta: {
            label: 'Application Header with Mobile Navigation',
          },
        },
        {
          path: "app-footer-1",
          name: "app-footer-1",
          component: () => import("@/components/examples/AppFooter1"),
          meta: {
            label: 'Application Footer with props',
          },
        },
        {
          path: "textbox-1",
          name: "textbox-1",
          component: () => import("@/components/examples/Textbox1"),
          meta: {
            label: 'Text input',
          },
        },
        {
          path: "checkbox-1",
          name: "checkbox-1",
          component: () => import("@/components/examples/Checkbox1"),
          meta: {
            label: 'Checkbox input',
          },
        },
        {
          path: 'form1',
          name: 'form1',
          component: () => import("@/components/examples/Form1Component"),
          meta: {
            label: 'Form example 1',
          },
        },
        {
          path: 'form2',
          name: 'form2',
          component: () => import("@/components/examples/Form2Component"),
          meta: {
            label: 'Form example 2',
          },
        },
      ],
    },
  ],
});