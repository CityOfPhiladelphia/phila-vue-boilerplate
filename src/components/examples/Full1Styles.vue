<template>
  <div class="content">
    <div class="columns is-multiline">
      <div class="column">
        <code>Headings</code>
        <hr>
        <h1>
          Heading size one
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloremque nulla laudantium ex pariatur distinctio hic praesentium delectus nostrum dicta dolore illo architecto id ratione sapiente voluptas ut dolorum omnis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloremque nulla laudantium ex pariatur distinctio hic praesentium delectus nostrum dicta dolore illo architecto id ratione sapiente voluptas ut dolorum omnis.</p>
        <h2>
          Heading size two
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloremque nulla laudantium ex pariatur distinctio hic praesentium delectus nostrum dicta dolore illo architecto id ratione sapiente voluptas ut dolorum omnis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloremque nulla laudantium ex pariatur distinctio hic praesentium delectus nostrum dicta dolore illo architecto id ratione sapiente voluptas ut dolorum omnis.</p>
        <h3>Heading size three</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloremque nulla laudantium ex pariatur distinctio hic praesentium delectus nostrum dicta dolore illo architecto id ratione sapiente voluptas ut dolorum omnis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloremque nulla laudantium ex pariatur distinctio hic praesentium delectus nostrum dicta dolore illo architecto id ratione sapiente voluptas ut dolorum omnis.</p>
        <h4>Heading size four</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloremque nulla laudantium ex pariatur distinctio hic praesentium delectus nostrum dicta dolore illo architecto id ratione sapiente voluptas ut dolorum omnis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloremque nulla laudantium ex pariatur distinctio hic praesentium delectus nostrum dicta dolore illo architecto id ratione sapiente voluptas ut dolorum omnis.</p>
        <h5>Heading size five</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloremque nulla laudantium ex pariatur distinctio hic praesentium delectus nostrum dicta dolore illo architecto id ratione sapiente voluptas ut dolorum omnis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloremque nulla laudantium ex pariatur distinctio hic praesentium delectus nostrum dicta dolore illo architecto id ratione sapiente voluptas ut dolorum omnis.</p>
        <h6>Heading size six</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloremque nulla laudantium ex pariatur distinctio hic praesentium delectus nostrum dicta dolore illo architecto id ratione sapiente voluptas ut dolorum omnis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloremque nulla laudantium ex pariatur distinctio hic praesentium delectus nostrum dicta dolore illo architecto id ratione sapiente voluptas ut dolorum omnis.</p>
        <hr>
        <code>Text styles</code>
        <hr>
        <ul>
          <li>
            <em>Italiac text</em>
          </li>
          <li>
            <strong>Strong/bold text</strong>
          </li>
          <li>
            <a href="#">Internal link<a />
            </a>
          </li>
          <li>
            <a
              href="#"
              class="external-link"
            >External link<a />
            </a>
          </li>
          <li class="is-small">
            <a
              href="#"
              class="external-link"
            >Small external link<a />
            </a>
          </li>
        </ul>
        <hr>
        <code>Quotes</code>
        <hr>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, facilis totam deserunt fugiat repellat corporis corrupti nihil, culpa odit hic sit! Omnis labore ut aut voluptatibus tempore! In, delectus nobis!</p>
        <blockquote>
          A blockquote Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus libero, culpa facilis voluptatem vero ea nemo, minus enim.!
        </blockquote>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, facilis totam deserunt fugiat repellat corporis corrupti nihil, culpa odit hic sit! Omnis labore ut aut voluptatibus tempore! In, delectus nobis!</p>
        <hr>
        <code>Lists</code>
        <hr>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, a quaerat?</p>
        <ul>
          <li>List item 1</li>
          <li>
            List item 2
            <ul>
              <li>List subitem 1</li>
              <li>List subitem 2</li>
            </ul>
          </li>
          <li>List item 3</li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sapiente distinctio inventore eius similique consectetur ex atque accusantium iste adipisci quisquam!</p>
        <ol>
          <li>List item 1</li>
          <li>
            List item 2
            <ul>
              <li>List subitem 1</li>
              <li>List subitem 2</li>
            </ul>
          </li>
          <li>List item 3</li>
        </ol>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sapiente distinctio inventore eius similique consectetur ex atque accusantium iste adipisci quisquam!</p>
        <!-- <p>Sample text to be translated: <strong>{{ $t("message.hello") }}</strong></p> -->

        <hr>
        <code>Button styles</code>
        <hr>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Small</th>
              <th>Medium (default)</th>
              <th>Large</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Primary
              </td>
              <td>
                <button class="button is-primary is-small">
                  Small
                </button>
              </td>
              <td>
                <button class="button is-primary">
                  Medium
                </button>
              </td>
              <td>
                <button class="button is-primary is-large">
                  Large
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Primary disabled
              </td>
              <td>
                <button
                  class="button is-primary is-small"
                  disabled
                >
                  Small
                </button>
              </td>
              <td>
                <button
                  class="button is-primary"
                  disabled
                >
                  Medium
                </button>
              </td>
              <td>
                <button
                  class="button is-primary is-large"
                  disabled
                >
                  Large
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Primary with left icon
              </td>
              <td>
                <button
                  class="button is-primary is-small"
                >
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                  <span>Icon Left</span>
                </button>
              </td>
              <td>
                <button
                  class="button is-primary"
                >
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                  <span>Icon Left</span>
                </button>
              </td>
              <td>
                <button
                  class="button is-primary is-large"
                >
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                  <span>Icon Left</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Primary with right icon
              </td>
              <td>
                <button
                  class="button is-primary is-small"
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                </button>
              </td>
              <td>
                <button
                  class="button is-primary"
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                </button>
              </td>
              <td>
                <button
                  class="button is-primary is-large"
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Primary with icon disabled
              </td>
              <td>
                <button
                  class="button is-primary is-small"
                  disabled
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                </button>
              </td>
              <td>
                <button
                  class="button is-primary"
                  disabled
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                </button>
              </td>
              <td>
                <button
                  class="button is-primary is-large"
                  disabled
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                </button>
              </td>
            </tr>

            <tr>
              <td>
                Secondary
              </td>
              <td>
                <button class="button is-secondary is-small">
                  Small
                </button>
              </td>
              <td>
                <button class="button is-secondary">
                  Medium
                </button>
              </td>
              <td>
                <button class="button is-secondary is-large">
                  Large
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Secondary disabled
              </td>
              <td>
                <button
                  class="button is-secondary is-small"
                  disabled
                >
                  Small
                </button>
              </td>
              <td>
                <button
                  class="button is-secondary"
                  disabled
                >
                  Medium
                </button>
              </td>
              <td>
                <button
                  class="button is-secondary is-large"
                  disabled
                >
                  Large
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Secondary with right icon
              </td>
              <td>
                <button
                  class="button is-secondary is-small"
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                </button>
              </td>
              <td>
                <button
                  class="button is-secondary"
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                </button>
              </td>
              <td>
                <button
                  class="button is-secondary is-large"
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Secondary with left icon
              </td>
              <td>
                <button
                  class="button is-secondary is-small"
                >
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                  <span>Icon Left</span>
                </button>
              </td>
              <td>
                <button
                  class="button is-secondary"
                >
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                  <span>Icon Left</span>
                </button>
              </td>
              <td>
                <button
                  class="button is-secondary is-large"
                >
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                  <span>Icon Left</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Secondary with icon disabled
              </td>
              <td>
                <button
                  class="button is-secondary is-small"
                  disabled
                >
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                  <span>Icon Left</span>
                </button>
              </td>
              <td>
                <button
                  class="button is-secondary"
                  disabled
                >
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                  <span>Icon Left</span>
                </button>
              </td>
              <td>
                <button
                  class="button is-secondary is-large"
                  disabled
                >
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                  <span>Icon Left</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Tertiary
              </td>
              <td>
                <button class="button is-tertiary is-small">
                  Small
                </button>
              </td>
              <td>
                <button class="button is-tertiary">
                  Medium
                </button>
              </td>
              <td>
                <button class="button is-tertiary is-large">
                  Large
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Tertiary disabled
              </td>
              <td>
                <button
                  class="button is-tertiary is-small"
                  disabled
                >
                  Small
                </button>
              </td>
              <td>
                <button
                  class="button is-tertiary"
                  disabled
                >
                  Medium
                </button>
              </td>
              <td>
                <button
                  class="button is-tertiary is-large"
                  disabled
                >
                  Large
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Tertiary with left icon
              </td>
              <td>
                <button
                  class="button is-tertiary is-small"
                >
                  <span class="icon">
                    <i class="fa fa-edit" />
                  </span>
                  <span>Icon Left</span>
                </button>
              </td>
              <td>
                <button
                  class="button is-tertiary"
                >
                  <span class="icon">
                    <i class="fa fa-edit" />
                  </span>
                  <span>Icon Left</span>
                </button>
              </td>
              <td>
                <button
                  class="button is-tertiary is-large"
                >
                  <span class="icon">
                    <i class="fa fa-edit" />
                  </span>
                  <span>Icon Left</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Tertiary with right icon
              </td>
              <td>
                <button
                  class="button is-tertiary is-small"
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-edit" />
                  </span>
                </button>
              </td>
              <td>
                <button
                  class="button is-tertiary"
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-edit" />
                  </span>
                </button>
              </td>
              <td>
                <button
                  class="button is-tertiary is-large"
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-edit" />
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Tertiary with icon disabled
              </td>
              <td>
                <button
                  class="button is-tertiary is-small"
                  disabled
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-edit" />
                  </span>
                </button>
              </td>
              <td>
                <button
                  class="button is-tertiary"
                  disabled
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-edit" />
                  </span>
                </button>
              </td>
              <td>
                <button
                  class="button is-tertiary is-large"
                  disabled
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-edit" />
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Primary call to action<br>(all have the same size)
              </td>
              <td>
                <button class="button is-cta is-small">
                  Small
                </button>
              </td>
              <td>
                <button class="button is-cta">
                  Medium
                </button>
              </td>
              <td>
                <button class="button is-cta is-large">
                  Large
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Primary call to action disabled<br>(all have the same size)
              </td>
              <td>
                <button
                  class="button is-cta is-small"
                  disabled
                >
                  Small
                </button>
              </td>
              <td>
                <button
                  class="button is-cta"
                  disabled
                >
                  Medium
                </button>
              </td>
              <td>
                <button
                  class="button is-cta is-large"
                  disabled
                >
                  Large
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Secondary call to action<br>(all have the same size)
              </td>
              <td>
                <button class="button is-cta is-secondary is-small">
                  Small
                </button>
              </td>
              <td>
                <button class="button is-cta is-secondary">
                  Medium
                </button>
              </td>
              <td>
                <button class="button is-cta is-secondary is-large">
                  Large
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Secondary call to action disabled<br>(all have the same size)
              </td>
              <td>
                <button
                  class="button is-cta is-secondary is-small"
                  disabled
                >
                  Small
                </button>
              </td>
              <td>
                <button
                  class="button is-cta is-secondary"
                  disabled
                >
                  Medium
                </button>
              </td>
              <td>
                <button
                  class="button is-cta is-secondary is-large"
                  disabled
                >
                  Large
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Destructive
              </td>
              <td>
                <button class="button is-danger is-small">
                  Small
                </button>
              </td>
              <td>
                <button class="button is-danger">
                  Medium
                </button>
              </td>
              <td>
                <button class="button is-danger is-large">
                  Large
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Destructive disabled
              </td>
              <td>
                <button
                  class="button is-danger is-small"
                  disabled
                >
                  Small
                </button>
              </td>
              <td>
                <button
                  class="button is-danger"
                  disabled
                >
                  Medium
                </button>
              </td>
              <td>
                <button
                  class="button is-danger is-large"
                  disabled
                >
                  Large
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Destructive with left icon
              </td>
              <td>
                <button
                  class="button is-danger is-small"
                >
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                  <span>Icon Left</span>
                </button>
              </td>
              <td>
                <button
                  class="button is-danger"
                >
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                  <span>Icon Left</span>
                </button>
              </td>
              <td>
                <button
                  class="button is-danger is-large"
                >
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                  <span>Icon Left</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Destructive with right icon
              </td>
              <td>
                <button
                  class="button is-danger is-small"
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                </button>
              </td>
              <td>
                <button
                  class="button is-danger"
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                </button>
              </td>
              <td>
                <button
                  class="button is-danger is-large"
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Destructive with icon disabled
              </td>
              <td>
                <button
                  class="button is-danger is-small"
                  disabled
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                </button>
              </td>
              <td>
                <button
                  class="button is-danger"
                  disabled
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                </button>
              </td>
              <td>
                <button
                  class="button is-danger is-large"
                  disabled
                >
                  <span>Icon Right</span>
                  <span class="icon">
                    <i class="fa fa-plus-square" />
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <hr>
        <code>Table (styles only)</code>
        <hr>
        <table class="table">
          <thead>
            <tr>
              <th class="sortable">
                Column 1
              </th>
              <th class="sortable sorting sorting-asc">
                Column 2
              </th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1 Col 1</td>
              <td>Row 1 Col 2</td>
              <td>Row 1 Col 3</td>
            </tr>
            <tr>
              <td>Row 2 Col 1</td>
              <td>Row 2 Col 2</td>
              <td>Row 2 Col 3</td>
            </tr>
            <tr>
              <td>Row 3 Col 1</td>
              <td>Row 3 Col 2</td>
              <td>Row 3 Col 3</td>
            </tr>
            <tr>
              <td>Row 4 Col 1</td>
              <td>Row 4 Col 2</td>
              <td>Row 4 Col 3</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">
                Table footer
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import * as PhilaUI from '@phila/phila-ui';
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
Vue.use(PhilaUI);

const i18n = new VueI18n({
  locale: "en-US",
  messages: {
    "en-US": {
      message: {
        hello: 'Hello',
      },
    },
    "es": {
      message: {
        hello: "Hola",
      },
    },
    "it": {
      message: {
        hello: "Ciao",
      },
    },
    "pt-BR": {
      message: {
        hello: "Olá",
      },
    },
  },
});

export default {
  i18n,
  components: {},
  data () {
    return {
      appHeader: {
        appTitle: "My First App",
        appSubtitle: "My app description",
        brandingImage: {
          src: require('../../assets/sample-logo.png'),
          width: '200px',
          height: 'auto',
          alt: "My branding image",
        },
      },
      languages: [
        {
          language: 'en-US',
          title: 'English',
        },
        {
          language: 'es',
          title: 'Spanish',
        },
        {
          language: 'it',
          title: 'Italian',
        },
        {
          language: 'pt-BR',
          title: 'Portuguese (Brazil)',
        },
      ],
      textboxValue: "",
      phoneValue: "",
      checkboxValue: [],
      checkboxes: [
        "Checkbox 1",
        "Checkbox 2",
        "Checkbox 3",
      ],
      radioValue: "",
      radioButtons: [
        "Radio button 1",
        "Radio button 2",
        "Radio button 3",
      ],
      dropdownValue: "",
      dropdownOptions: [
        "Dropdown Option 1",
        "Dropdown Option 2",
        "Dropdown Option 3",
      ],
      textAreaValue: "",
      footerLinks: [
        {
          type: "native",
          href: "/sample-link",
          text: "Sample Link 1",
        },
        {
          type: "native",
          href: "/sample-link2",
          text: "Sample Link 2",
        },
      ],
      formErrors: {
        form1: false,
        form2: false,
      },
    };
  },
  methods: {
    toggleErrors (form) {
      this.formErrors[form] = !this.formErrors[form];
    },
  },
};
</script>
<style lang="scss">
 .back-to {
    display: none;
  }

</style>