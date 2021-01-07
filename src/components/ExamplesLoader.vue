<template>
  <div class="phila-ui-example-frame">
    <div class="phila-ui-example-toolbar">
      <button @click.prevent="paneSize=100">
        Code
      </button>
      <button @click.prevent="paneSize=0">
        Preview
      </button>
      <button @click.prevent="paneSize=50">
        Split
      </button>
    </div>
    <splitpanes
      class="default-theme"
      :horizontal="horizontal"
    >
      <pane
        ref="code-panel"
        :size="paneSize"
      >
        <vue-code-highlight>
          {{ code.data }}
        </vue-code-highlight>
      </pane>
      <pane
        ref="preview-panel"
        :size="100 - paneSize"
      >
        <iframe
          class="example-frame"
          :src="src"
        />
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import Vue from 'vue';
import Axios from 'axios';

import { component as VueCodeHighlight } from 'vue-code-highlight';
import '@/assets/css/prism-theme.css';

import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';

import VueFriendlyIframe from 'vue-friendly-iframe';
Vue.use(VueFriendlyIframe);

export default {
  components: {
    Splitpanes,
    Pane,
    VueCodeHighlight,
  },
  data () {
    return {
      code: '',
      paneSize: 50,
      horizontal: false,
      example: null,
      height: 400,
      src: '',
    };
  },
  watch: {
    paneSize() {
      switch(this.paneSize) {
      case 0:
        // this.height = this.$refs['preview'].offsetHeight;
        break;
      case 50:
      case 100:
        // this.height = this.$refs['code-panel'].$el.children[0].offsetHeight;
        break;
      }
    },
  },
  async created () {

    const exampleName = this.$route.query.example || null;

    this.src = `/examples/${exampleName}`;
    this.height = this.$route.query.height || 400;

    let file = '';

    if (exampleName) {

      this.example = () => import(`@/components/examples/${exampleName}.vue`);
      try {
        file = await Axios.get(`/examples/${exampleName}.vue`, {
          responseType: 'text',
          headers: {
            'Content-Type': 'text',
          },
        });
      } catch (error) {
        console.error(error);
      }
    }

    this.code = file;

  },
};
</script>
<style>
  .phila-ui-example-frame {
    height: 100%;
    overflow: scroll;
    padding: 0;
    margin: 0;
  }
  .phila-ui-example-toolbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    height: 30px;
    background-color: #ccc;
  }
  .example-frame {
    width: 100%;
    height: calc(100vh + 30px);
  }
  .splitpanes {
    margin-top: 30px;
  }
  pre[class*="language-"] {
    margin: 0;
    padding: 0.5rem;
  }
</style>