<template>
  <div id="app">
    <app-header
      app-title="Demo title"
      :is-sticky="false"
    />
    <main>
      <div class="container">
        <p>
          Tooltip position = top-center <tooltip
            message="Some tooltip text"
            position="top-center"
          />
        </p>
        <br><br><br><br>
        <p>
          Tooltip position = bottom-center <tooltip
            message="Some tooltip text"
            position="bottom-center"
          />
        </p>
        <br><br><br><br>
        <p>
          Tooltip position = right <tooltip
            message="Some tooltip text"
            position="right"
          />
        </p>
        <br><br><br><br>
        <p>
          Tooltip position = top-right <tooltip
            message="Some tooltip text"
            position="top-right"
          />
        </p>
        <br><br><br><br>
        <p>
          Tooltip position = bottom-right <tooltip
            message="Some tooltip text"
            position="bottom-right"
          />
        </p>
      </div>
    </main>
  </div>
</template>

<script>

//modal pass heading or remove it
//language dropdown // add default languages
//rework how dropdown works
//add translation to all components

import { AppHeader, Tooltip } from '@phila/phila-ui';

export default {
  components: {
    AppHeader,
    Tooltip,
  },
  data () {
    return {};
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>