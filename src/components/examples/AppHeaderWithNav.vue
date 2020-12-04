<template>
  <div>
    <app-header
      app-title="My Application"
      app-subtitle="My application sub-title"
      app-link="https://phila.gov"
    >
      <tabs-nav 
        slot="tabs-nav" 
        :links="myLinks" 
      />
      <!-- <dropdown-nav slot="dropdown-nav" :links="myLinks" />
      <lang-selector slot="lang-selector-nav" :languages="myLanguages" />
      <mobile-nav slot="mobile-nav" :links="myLinks" /> -->
    </app-header>
    <main />
  </div>
</template>
<script>
import { AppHeader, TabsNav } from '@phila/phila-ui';
export default {
  components: {
    AppHeader,
  },
  data () {
    return {
      brandingImage: { 
        src: "https://www.phila.gov/assets/images/city-of-philadelphia-yellow-white.png",
        alt: "City of Philadelphia logo",
        width: "200px",
      },
      brandingLink: {
        href: "https://www.phila.gov",
        target: "_blank",
      },
    };
  },
};
</script>