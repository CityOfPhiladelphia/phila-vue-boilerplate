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
      path: "/loader/:example",
      name: "loader",
      props: true,
      component: () => import("@/components/ExamplesLoader"),
    },
    {
      path: "/examples",
      name: "examples",
      component: () => import("@/components/Examples"),
      children: [
        {
          path: "AppHeader1",
          name: "AppHeader1",
          component: () => import("@/components/examples/AppHeader1"),
          meta: {
            label: 'with title and subtitle',
            category: "Navigation",
            component: "AppHeader",
          },
        },
        {
          path: "AppHeader2",
          name: "AppHeader2",
          component: () => import("@/components/examples/AppHeader2"),
          meta: {
            label: 'with branding image and link',
            category: "Navigation",
            component: "AppHeader",
          },
        },
        {
          path: "AppHeader3",
          name: "AppHeader3",
          component: () => import("@/components/examples/AppHeader3"),
          meta: {
            label: 'with tabbed navigation',
            category: "Navigation",
            component: "AppHeader",
          },
        },
        {
          path: "AppHeader4",
          name: "AppHeader4",
          component: () => import("@/components/examples/AppHeader4"),
          meta: {
            label: 'with dropdown navigation',
            category: "Navigation",
            component: "AppHeader",
          },
        },
        {
          path: "AppHeader5",
          name: "AppHeader5",
          component: () => import("@/components/examples/AppHeader5"),
          meta: {
            label: 'with language selector',
            category: "Navigation",
            component: "AppHeader",
          },
        },
        {
          path: "AppHeader6",
          name: "AppHeader6",
          component: () => import("@/components/examples/AppHeader6"),
          meta: {
            label: 'with mobile navigation',
            category: "Navigation",
            component: "AppHeader",
          },
        },
        {
          path: "AppHeader",
          name: "AppHeader",
          component: () => import("@/components/examples/AppHeader"),
          meta: {
            label: 'with all main props and slots',
            category: "Navigation",
            component: "AppHeader",
          },
        },
        {
          path: "AppFooter1",
          name: "AppFooter1",
          component: () => import("@/components/examples/AppFooter1"),
          meta: {
            label: 'with basic links',
            category: "Navigation",
            component: "AppFooter",
          },
        },
        {
          path: "AppFooter2",
          name: "AppFooter2",
          component: () => import("@/components/examples/AppFooter2"),
          meta: {
            label: 'with positon fixed',
            category: "Navigation",
            component: "AppFooter",
          },
        },
        {
          path: "Form1",
          name: "Form1",
          component: () => import("@/components/examples/Form1"),
          meta: {
            label: 'with validation on each field',
            category: "Inputs",
            component: "Form",
          },
        },
        {
          path: "Form2",
          name: "Form2",
          component: () => import("@/components/examples/Form2"),
          meta: {
            label: 'with validation on submit',
            category: "Inputs",
            component: "Form",
          },
        },
        {
          path: "Textbox1",
          name: "Textbox1",
          component: () => import("@/components/examples/Textbox1"),
          meta: {
            label: 'with placeholder as label (default)',
            category: "Inputs",
            component: "Textbox",
          },
        },
        {
          path: "Textbox3",
          name: "Textbox3",
          component: () => import("@/components/examples/Textbox3"),
          meta: {
            label: 'with label on top',
            category: "Inputs",
            component: "Textbox",
          },
        },
        {
          path: "Textbox2",
          name: "Textbox2",
          component: () => import("@/components/examples/Textbox2"),
          meta: {
            label: 'with error',
            category: "Inputs",
            component: "Textbox",
          },
        },
        {
          path: "Textbox4",
          name: "Textbox4",
          component: () => import("@/components/examples/Textbox4"),
          meta: {
            label: 'with validation',
            category: "Inputs",
            component: "Textbox",
          },
        },
        {
          path: "Checkbox1",
          name: "Checkbox1",
          component: () => import("@/components/examples/Checkbox1"),
          meta: {
            label: 'with Array of options',
            category: "Inputs",
            component: "Checkbox",
          },
        },
        {
          path: "Checkbox2",
          name: "Checkbox2",
          component: () => import("@/components/examples/Checkbox2"),
          meta: {
            label: 'with options Object',
            category: "Inputs",
            component: "Checkbox",
          },
        },
        {
          path: "Checkbox3",
          name: "Checkbox3",
          component: () => import("@/components/examples/Checkbox3"),
          meta: {
            label: 'with Array of Object options',
            category: "Inputs",
            component: "Checkbox",
          },
        },
        {
          path: "Checkbox4",
          name: "Checkbox4",
          component: () => import("@/components/examples/Checkbox4"),
          meta: {
            label: 'with error',
            category: "Inputs",
            component: "Checkbox",
          },
        },
        {
          path: "Checkbox5",
          name: "Checkbox5",
          component: () => import("@/components/examples/Checkbox5"),
          meta: {
            label: 'with validation',
            category: "Inputs",
            component: "Checkbox",
          },
        },
        {
          path: "CheckboxTester",
          name: "CheckboxTester",
          component: () => import("@/components/examples/CheckboxTester"),
          meta: {
            label: 'config tester',
            category: "Inputs",
            component: "Checkbox",
          },
        },
        {
          path: "Radio1",
          name: "Radio1",
          component: () => import("@/components/examples/Radio1"),
          meta: {
            label: 'with Array of options',
            category: "Inputs",
            component: "Radio",
          },
        },
        {
          path: "Radio2",
          name: "Radio2",
          component: () => import("@/components/examples/Radio2"),
          meta: {
            label: 'with options Object',
            category: "Inputs",
            component: "Radio",
          },
        },
        {
          path: "Radio3",
          name: "Radio3",
          component: () => import("@/components/examples/Radio3"),
          meta: {
            label: 'with Array of Object options',
            category: "Inputs",
            component: "Radio",
          },
        },
        {
          path: "Radio4",
          name: "Radio4",
          component: () => import("@/components/examples/Radio4"),
          meta: {
            label: 'with error',
            category: "Inputs",
            component: "Radio",
          },
        },
        {
          path: "Radio5",
          name: "Radio5",
          component: () => import("@/components/examples/Radio5"),
          meta: {
            label: 'with validation',
            category: "Inputs",
            component: "Radio",
          },
        },
        {
          path: "RadioTester",
          name: "RadioTester",
          component: () => import("@/components/examples/RadioTester"),
          meta: {
            label: 'config tester',
            category: "Inputs",
            component: "Radio",
          },
        },
        {
          path: "Dropdown1",
          name: "Dropdown1",
          component: () => import("@/components/examples/Dropdown1"),
          meta: {
            label: 'with Array of options',
            category: "Inputs",
            component: "Dropdown",
          },
        },
        {
          path: "Dropdown2",
          name: "Dropdown2",
          component: () => import("@/components/examples/Dropdown2"),
          meta: {
            label: 'with options Object',
            category: "Inputs",
            component: "Dropdown",
          },
        },
        {
          path: "Dropdown3",
          name: "Dropdown3",
          component: () => import("@/components/examples/Dropdown3"),
          meta: {
            label: 'with Array of Object options',
            category: "Inputs",
            component: "Dropdown",
          },
        },
        {
          path: "TextArea1",
          name: "TextArea1",
          component: () => import("@/components/examples/TextArea1"),
          meta: {
            label: 'with placeholder and description',
            category: "Inputs",
            component: "TextArea",
          },
        },
        {
          path: "TextArea2",
          name: "TextArea2",
          component: () => import("@/components/examples/TextArea2"),
          meta: {
            label: 'with error',
            category: "Inputs",
            component: "TextArea",
          },
        },
        {
          path: "TextArea3",
          name: "TextArea3",
          component: () => import("@/components/examples/TextArea3"),
          meta: {
            label: 'with validation',
            category: "Inputs",
            component: "TextArea",
          },
        },
        {
          path: "Callout1",
          name: "Callout1",
          component: () => import("@/components/examples/Callout1"),
          meta: {
            label: 'with custom types',
            component: 'Callout',
            category: 'Other',
          },
        },
        {
          path: "Callout2",
          name: "Callout2",
          component: () => import("@/components/examples/Callout2"),
          meta: {
            label: 'using class and slot',
            component: 'Callout',
            category: 'Other',
          },
        },
        {
          path: "Full1",
          name: "Full1",
          component: () => import("@/components/examples/Full1"),
          meta: {
            label: 'Full example using all components and styles',
            component: 'All',
            category: 'Other',
          },
        },
      ],
    },
  ],
});