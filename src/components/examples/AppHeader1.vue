<template>
  <div>
    <app-header
      app-title="My Application"
      app-subtitle="My application sub-title"
      app-link="https://phila.gov"
      :branding-image="brandingImage"
      :branding-link="brandingLink"
    />
    <main />
  </div>
</template>
<script>
import { AppHeader } from '@phila/phila-ui';
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
        target: "_blank"
      }
    };
  },
};
</script>