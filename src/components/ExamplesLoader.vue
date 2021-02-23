<template>
  <div
    v-show="ready"
    class="phila-ui-example-frame"
  >
    <div
      v-if="hasBar"
      class="phila-ui-example-toolbar"
    >
      <div
        ref="buttons"
        class="buttons"
      >
        <button
          v-if="hasSplit"
          id="split"
          class="button is-tertiary is-small tab-btn"
          title="code and preview"
          @click.prevent="updateView('split')"
        >
          <i class="fas fa-columns" />
        </button>
        <button
          v-if="hasPreview"
          id="preview"
          class="button is-tertiary is-small tab-btn"
          title="preview"
          @click.prevent="updateView('preview')"
        >
          <i class="fas fa-eye" />
        </button>
        <button
          v-if="hasCode"
          id="code"
          class="button is-tertiary is-small tab-btn"
          title="view code"
          @click.prevent="updateView('code')"
        >
          <i class="fas fa-code" />
        </button>

        <button
          v-if="canCopy && hasCopy"
          id="copy"
          class="button is-tertiary is-small"
          title="copy code"
          @click.prevent="copy"
        >
          <i class="fas fa-copy" />
        </button>
        <button
          v-if="hasFs"
          id="new-window"
          class="button is-tertiary is-small"
          title="new window"
          @click.prevent="goToExample"
        >
          <i class="far fa-external-link-square" />
        </button>
      </div>
    </div>
    <splitpanes
      class="default-theme"
      :horizontal="horizontal"
    >
      <pane
        v-if="hasCode"
        ref="code-panel"
        :class="'code-panel'"
        :size="paneSize"
      >
        <vue-code-highlight>
          {{ code.data }}
        </vue-code-highlight>
      </pane>
      <pane
        ref="preview-panel"
        :class="'preview-panel'"
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

export default {
  components: {
    Splitpanes,
    Pane,
    VueCodeHighlight,
  },
  props: {
    example: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      ready: false,
      code: '',
      paneSize: 50,
      horizontal: false,
      src: '',
      canCopy: false,
      hasBar: true,
      hasCopy: true,
      hasCode: true,
      hasPreview: true,
      hasSplit: true,
      hasFs: false,
      defaultView: 'split',
    };
  },
  async created () {

    //Browser has clipboard functionality?
    this.canCopy = !!navigator.clipboard;

    //Example path
    this.src = `/examples/${this.example}`;

    //Get params and override defaults
    Object.keys(this.$route.query).forEach(key => {
      if (this[key] !== undefined) {
        this[key] = JSON.parse(this.$route.query[key].toLowerCase());
      }
    });

    //defaultPreview order
    if (this.hasSplit) {
      this.defaultView = this.$route.query.defaultView || 'split';
    } else if (this.hasPreview) {
      this.defaultView = this.$route.query.defaultView || 'preview';
    } else if (this.hasCode) {
      this.defaultView = this.$route.query.defaultView || 'code';
    }


    let file = '';

    //Get the file using axios to read it as text without rendering the code

    if (this.example) {

      try {
        file = await Axios.get(`/examples/${this.example}.vue`, {
          responseType: 'text',
          headers: {
            'Content-Type': 'text',
          },
        });
        this.code = file;
      } catch (error) {
        console.error(error);
      }
    }

    if (this.$refs['buttons']) {
      let allButtons = this.$refs.buttons.querySelectorAll('.tab-btn');
      let defaultView = this.defaultView;

      allButtons.forEach(button => {
        if (button.getAttribute('id') === defaultView) {
          button.classList.add('is-active');
          button.click();
        }

        button.addEventListener('click', function (event) {
          allButtons.forEach(button => {
            if (button !== this) {
              button.classList.remove('is-active');
            }
          });
          this.classList.add('is-active');
        });
      });
    }

    this.ready = true;

  },
  mounted () {
    if (this.horizontal) {
      this.updateView("split");
    }
  },
  methods: {
    goToExample () {
      let url = this.$route.fullPath.replace('&hasFs=true', '');
      window.open(url, '_blank');
    },
    async copy () {
      await navigator.clipboard.writeText(this.code.data);
      window.alert('Copied code to clipboard!');
    },
    updateView (view) {
      let codePanel = this.$refs['code-panel'];
      let previewPanel = this.$refs['preview-panel'];
      if (this.horizontal) {
        if (view === 'split') {
          codePanel.style.height = "50%";
          previewPanel.style.height = "50%";
        } else if (view === 'preview') {
          codePanel.style.height = "0";
          previewPanel.style.height = "100%";
        } else if (view === 'code') {
          codePanel.style.height = "100%";
          previewPanel.style.height = "0";
        }
        this.paneSize = 100;
      } else {
        codePanel.style.height = "100%";
        previewPanel.style.height = "100%";
        if (view === 'split') {
          this.paneSize = 50;
        } else if (view === 'preview') {
          this.paneSize = 0;
        } else if (view === 'code') {
          this.paneSize = 100;
        }
      }
    },
  },
};
</script>
<style lang="scss">
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
    height: 41px;
    line-height: 41px;
    background-color: #fff;
    padding: 0 0.2rem;
    border-bottom: 2px solid $ben-franklin-blue;
    .button {
      margin-top: 3px;
      margin-bottom: 0;
      i {
        color: $grey-light;
      }
      &.is-active {
        i {
          color: $ben-franklin-blue;
        }
      }
      &#copy, &#new-window {
        i {
          color: $ben-franklin-blue-dark;
        }
      }
    }

    + .splitpanes {
      margin-top: 41px;
    }
  }

  .example-frame {
    width: 100%;
    height: calc(100vh - 41px);
    padding: 1rem 0.5rem;
  }

  .code-panel {
    background-color: #263238 !important;
  }

  .splitpanes.default-theme .splitpanes__pane {
    background-color: #fff;
    height: calc(100vh - 41px);
    overflow: scroll;
  }
  pre[class*="language-"] {
    margin: 0;
    padding: 1rem 0.5rem;
  }
</style>