<template>
  <div class="section content">
    <h2 class="is-size-1">
      Main Colors
    </h2>
    <div class="columns">
      <div class="column is-3 has-background-bell-yellow has-text-dark-grey has-text-centered">
        bell-yellow
      </div>
    </div>
    <div class="columns">
      <div class="column is-3 has-background-electric-blue has-text-dark-grey has-text-centered">
        electric-blue
      </div>
      <div class="column is-3 has-background-ben-franklin-blue has-text-white has-text-centered">
        ben-franklin-blue
      </div>
      <div class="column is-3 has-background-ben-franklin-blue-dark has-text-white has-text-centered">
        ben-franklin-blue-dark
      </div>
    </div>
    <div class="columns">
      <div class="column is-3 has-background-phanatic-green has-text-white has-text-centered">
        phanatic-green
      </div>
    </div>
    <div class="columns">
      <div class="column is-3 has-background-love-park-red has-text-white has-text-centered">
        love-park-red-dark
      </div>
      <div class="column is-3 has-background-love-park-red-dark has-text-white has-text-centered">
        love-park-red-dark
      </div>
    </div>
    <h2 class="is-size-1">
      Light (Background) Colors
    </h2>
    <div class="columns">
      <div class="column is-3 has-background-bell-yellow-light has-text-dark-grey has-text-centered">
        bell-yellow-light
      </div>
    </div>
    <div class="columns">
      <div class="column is-3 has-background-ben-franklin-blue-light has-text-ben-franklin-blue-dark has-text-centered">
        ben-franklin-blue-light
      </div>
    </div>
    <div class="columns">
      <div class="column is-3 has-background-love-park-red-light has-text-love-park-red-dark has-text-centered">
        love-park-red-light
      </div>
    </div>
    <div class="columns">
      <div class="column is-3 has-background-phanatic-green-light has-text-phanatic-green-dark has-text-centered">
        phanatic-green-light
      </div>
    </div>
    <h2 class="is-size-1">
      Callout
    </h2>

    <callout
      message="Default message"
    />
    <callout
      message="Info message"
      class="is-info"
    />
    <callout
      message="Success message"
      class="is-success"
    />
    <callout
      message="Warning message"
      class="is-warning"
    />
    <callout
      message="Danger message"
      class="is-danger"
    />

    <div class="columns is-multiline">
      <div class="column">
        <h2 class="is-size-1">
          Button Styles
        </h2>
        <h3 class="is-size-2">
          Primary Buttons
        </h3>
        <div class="buttons">
          <button class="button is-primary is-small">
            Small
          </button>
          <button class="button is-primary">
            Normal
          </button>
          <button class="button is-primary is-large">
            Large
          </button>
        </div>
        <div class="buttons">
          <button
            class="button is-primary"
            disabled
          >
            Disabled
          </button>
          <button
            class="button is-primary"
            disabled
          >
            <span>Icon Right</span>
            <span class="icon is-small">
              <i class="fas fa-plus-square" />
            </span>
          </button>
        </div>
        <div class="buttons">
          <button
            class="button is-primary"
          >
            <span>Icon Right</span>
            <span class="icon is-small">
              <i class="fas fa-plus-square" />
            </span>
          </button>
          <button
            class="button is-primary"
          >
            <span class="icon is-small">
              <i class="fas fa-check" />
            </span>
            <span>Icon Left</span>
          </button>
        </div>
        <h3 class="is-size-2">
          Secondary Buttons
        </h3>
        <div class="buttons">
          <button class="button is-secondary is-small">
            Small
          </button>
          <button class="button is-secondary">
            Normal
          </button>
          <button class="button is-secondary is-large">
            Large
          </button>
        </div>
        <div class="buttons">
          <button
            class="button is-secondary"
            disabled
          >
            Disabled
          </button>
          <button
            class="button is-secondary"
            disabled
          >
            <span>Icon Right</span>
            <span class="icon is-small">
              <i class="fas fa-plus-square" />
            </span>
          </button>
        </div>
        <div class="buttons">
          <button
            class="button is-secondary"
          >
            <span>Icon Right</span>
            <span class="icon is-small">
              <i class="fas fa-plus-square" />
            </span>
          </button>
          <button
            class="button is-secondary"
          >
            <span class="icon is-small">
              <i class="fas fa-check" />
            </span>
            <span>Icon Left</span>
          </button>
        </div>
        <h3 class="is-size-2">
          Tertiary Buttons
        </h3>
        <div class="buttons">
          <button class="button is-tertiary is-small">
            Small
          </button>
          <button class="button is-tertiary">
            Normal
          </button>
          <button class="button is-tertiary is-large">
            Large
          </button>
        </div>
        <div class="buttons">
          <button
            class="button is-tertiary"
            disabled
          >
            Disabled
          </button>
          <button
            class="button is-tertiary"
            disabled
          >
            <span>Icon Right</span>
            <span class="icon is-small">
              <i class="fas fa-plus-square" />
            </span>
          </button>
        </div>
        <div class="buttons">
          <button
            class="button is-tertiary"
          >
            <span>Icon Right</span>
            <span class="icon is-small">
              <i class="fas fa-plus-square" />
            </span>
          </button>
          <button
            class="button is-tertiary"
          >
            <span class="icon is-small">
              <i class="fas fa-check" />
            </span>
            <span>Icon Left</span>
          </button>
        </div>
        <h3 class="is-size-2">
          Call to Action / Submit Buttons
        </h3>
        <div class="buttons">
          <button
            href="#"
            class="button is-tertiary is-cta"
          >
            Tertiary
          </button>
          &nbsp;&nbsp;&nbsp;
          <button class="button is-secondary is-cta">
            Secondary
          </button>
          <button class="button is-cta">
            Primary
          </button>
        </div>
        <div class="buttons">
          <button
            class="button is-tertiary is-cta"
            disabled
          >
            Disabled Text
          </button>
          <button
            class="button is-secondary is-cta"
            disabled
          >
            Disabled Secondary
          </button>
          <button
            class="button is-cta"
            disabled
          >
            Disabled Primary
          </button>
        </div>
        <h3 class="is-size-2">
          Link Styles
        </h3>
        <div class="level">
          <div class="level-item">
            <a
              href="#"
              class="is-link is-small"
            >
              Small Link Label
            </a>
          </div>
          <div class="level-item">
            <a
              href="#"
              class="is-link"
            >
              Normal Link Label
            </a>
          </div>
          <div class="level-item">
            <a
              href="#"
              class="is-link is-large"
            >
              Large Link Label
            </a>
          </div>
        </div>
        <h3 class="is-size-2">
          Link Styles With Icons
        </h3>
        <div class="level">
          <div class="level-item">
            <a
              href="#"
              class="is-link is-small"
            >
              <span class="icon">
                <i class="fas fa-pencil" />
              </span>
              <span>Small Icon Before</span>
            </a>
          </div>
          <div class="level-item">
            <a
              href="#"
              class="is-link is-small"
            >
              <span>Small Icon After</span>
              <span class="icon">
                <i class="fas  fa-external-link" />
              </span>
            </a>
          </div>
        </div>
        <div class="level">
          <div class="level-item">
            <a
              href="#"
              class="is-link"
            >
              <span class="icon">
                <i class="fas fa-pencil" />
              </span>
              <span>Normal Icon Before</span>
            </a>
          </div>
          <div class="level-item">
            <a
              href="#"
              class="is-link"
            >
              <span>Normal Icon After</span>
              <span class="icon">
                <i class="fas  fa-external-link" />
              </span>
            </a>
          </div>
        </div>
        <div class="level">
          <div class="level-item">
            <a
              href="#"
              class="is-link is-large"
            >
              <span class="icon">
                <i class="fas  fa-pencil" />
              </span>
              <span>Large Icon Before</span>
            </a>
          </div>
          <div class="level-item">
            <a
              href="#"
              class="is-link is-large"
            >
              <span>Large Icon After</span>
              <span class="icon">
                <i class="fas  fa-external-link" />
              </span>
            </a>
          </div>
        </div>
        <h3 class="is-size-2">
          Destructive Buttons
        </h3>
        <div class="buttons">
          <button class="button is-danger is-small">
            Small
          </button>
          <button class="button is-danger">
            Normal
          </button>
          <button class="button is-danger is-large">
            Large
          </button>
        </div>
        <div class="buttons">
          <button
            class="button is-danger"
            disabled
          >
            Disabled
          </button>
          <button
            class="button is-danger"
            disabled
          >
            <span>Icon Right</span>
            <span class="icon is-trash">
              <i class="fas fa-plus-square" />
            </span>
          </button>
        </div>
        <div class="buttons">
          <button
            class="button is-danger"
          >
            <span>Icon Right</span>
            <span class="icon is-trash">
              <i class="fas fa-plus-square" />
            </span>
          </button>
          <button
            class="button is-danger"
          >
            <span class="icon is-small">
              <i class="fas fa-times" />
            </span>
            <span>Icon Left</span>
          </button>
        </div>
        <h2 class="is-size-1">
          Typography
        </h2>
        <div>
          <h3 class="is-size-2">
            Simple Headers
          </h3>
          <h2 class="is-size-1">
            Heading size 1
          </h2>
          <h2 class="is-size-2">
            Heading size 2
          </h2>
          <h3 class="is-size-3">
            Heading size 3
          </h3>
          <h4 class="is-size-4">
            Heading size 4
          </h4>
        </div>
        <hr>
        <h2 class="is-size-2">
          Custom Headers
        </h2>
        <div>
          <h1 class="is-size-1 heading-with-background">
            Heading 1 with background
          </h1>
          <h2 class="is-size-2 heading-with-background">
            Heading 2 with background
          </h2>
          <h3 class="is-size-3 heading-with-background">
            Heading 3 with background
          </h3>
          <h4 class="is-size-4 heading-with-background">
            Heading 4 with background
          </h4>
        </div>
        <div>
          <h1 class="is-size-1 heading-with-contrast">
            Heading 1 with background
          </h1>
          <h2 class="is-size-2 heading-with-contrast">
            Heading 2 with background
          </h2>
          <h3 class="is-size-3 heading-with-contrast">
            Heading 3 with background
          </h3>
          <h4 class="is-size-4 heading-with-contrast">
            Heading 4 with background
          </h4>
        </div>
        <hr>
        <div>
          <h2 class="is-size-2">
            Titles over subtitles
          </h2>
          <div>
            <h1 class="title is-1">
              Title Heading 1
            </h1>
            <div class="subtitle is-1">
              Matching Subtitle 1
            </div>
          </div>
          <div>
            <h2 class="title is-2">
              Title Heading 2
            </h2>
            <div class="subtitle is-2">
              Matching Subtitle 2
            </div>
          </div>
          <div>
            <h3 class="title is-3">
              Title Heading 3
            </h3>
            <div class="subtitle is-3">
              Matching Subtitle 3
            </div>
          </div>
          <div>
            <h4 class="title is-4">
              Title Heading 4
            </h4>
            <div class="subtitle is-4">
              Matching Subtitle 4
            </div>
          </div>
        </div>
        <hr>
        <div>
          <h2 class="is-size-2">
            Subtitles over Titles
          </h2>
          <div>
            <div class="subtitle is-1">
              Subtitle 1
            </div>
            <h1 class="title is-1">
              Matching Title 1
            </h1>
          </div>
          <div>
            <div class="subtitle is-2">
              Subtitle 2
            </div>
            <h2 class="title is-2">
              Matching Title 2
            </h2>
          </div>
          <div>
            <div class="subtitle is-3">
              Subtitle 3
            </div>
            <h3 class="title is-3">
              Matching Title 3
            </h3>
          </div>
          <div>
            <div class="subtitle is-4">
              Subtitle 4
            </div>
            <h4 class="title is-4">
              Matching Title 4
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
    };
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
  // Your Styles Here
</style>
