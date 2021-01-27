<template>
  <div>
    <app-header />
    <main>
      AppHeader added for footer positioning purposes.<br>
      Footer position is fixed to the bottom of the screen.<br>
      <strong>Scroll down:</strong>
      <div
        v-for="n in 10"
        :key="n"
      >
        <div :style="`background-color:rgb(255, ${255 - n * 20}, ${255 - n * 15});height:${n * 10}vh;width:100%;`" />
      </div>
    </main>
    <app-footer
      :is-sticky="true"
      :links="links"
    />
  </div>
</template>
<script>
import { AppFooter, AppHeader } from '@phila/phila-ui';
export default {
  components: {
    AppFooter,
    AppHeader,
  },
  data () {
    return{
      links: [
        {
          type: "native",
          href: "#",
          text: "Link 1",
        },
        {
          type: "native",
          href: "#",
          text: "Link 2",
        },
        {
          type: "native",
          href: "#",
          text: "Link 3",
        },
      ],
    };
  },
};
</script>
<style scoped>
  main {
    min-height: 150vh;
  }
</style>