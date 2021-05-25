<template>
  <div id="app">
    <app-header
      app-title="Table styles preview"
      :is-sticky="false"
    />
    <main>
      <div class="container">
        <h2 class="title">
          Table without any sorting
        </h2>
        <table class="table">
          <thead>
            <tr>
              <th>
                Column 1 very long column name
              </th>
              <th>
                Column 2
              </th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Col 1 cell 1
              </td>
              <td>
                Col 2 cell 1
              </td>
              <td>
                Col 3 cell 1
              </td>
            </tr>
            <tr>
              <td>
                Col 1 cell 2
              </td>
              <td>
                Col 2 cell 2
              </td>
              <td>
                Col 3 cell 2
              </td>
            </tr>
            <tr>
              <td>
                Col 1 cell 3
              </td>
              <td>
                Col 2 cell 3
              </td>
              <td>
                Col 3 cell 3
              </td>
            </tr>
            <tr>
              <td>
                Col 1 cell 4
              </td>
              <td>
                Col 2 cell 4
              </td>
              <td>
                Col 3 cell 4
              </td>
            </tr>
          </tbody>
        </table>
        <h2 class="title">
          Table with sorting enabled on first column
        </h2>
        <div class="subtitle">
          but not sorted
        </div>
        <table class="table">
          <thead>
            <tr>
              <th class="sortable">
                Column 1 very long column name
              </th>
              <th>
                Column 2
              </th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Col 1 cell 1
              </td>
              <td>
                Col 2 cell 1
              </td>
              <td>
                Col 3 cell 1
              </td>
            </tr>
            <tr>
              <td>
                Col 1 cell 2
              </td>
              <td>
                Col 2 cell 2
              </td>
              <td>
                Col 3 cell 2
              </td>
            </tr>
            <tr>
              <td>
                Col 1 cell 3
              </td>
              <td>
                Col 2 cell 3
              </td>
              <td>
                Col 3 cell 3
              </td>
            </tr>
            <tr>
              <td>
                Col 1 cell 4
              </td>
              <td>
                Col 2 cell 4
              </td>
              <td>
                Col 3 cell 4
              </td>
            </tr>
          </tbody>
        </table>
        <h2 class="title">
          Table with first col sorted (asc)
        </h2>
        <table class="table">
          <thead>
            <tr>
              <th class="sortable sorted asc">
                Column 1 very long column name
              </th>
              <th>
                Column 2
              </th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Col 1 cell 1
              </td>
              <td>
                Col 2 cell 1
              </td>
              <td>
                Col 3 cell 1
              </td>
            </tr>
            <tr>
              <td>
                Col 1 cell 2
              </td>
              <td>
                Col 2 cell 2
              </td>
              <td>
                Col 3 cell 2
              </td>
            </tr>
            <tr>
              <td>
                Col 1 cell 3
              </td>
              <td>
                Col 2 cell 3
              </td>
              <td>
                Col 3 cell 3
              </td>
            </tr>
            <tr>
              <td>
                Col 1 cell 4
              </td>
              <td>
                Col 2 cell 4
              </td>
              <td>
                Col 3 cell 4
              </td>
            </tr>
          </tbody>
        </table>
        <h2 class="title">
          Table with first col sorted (desc)
        </h2>
        <div class="subtitle">
          and with sortable enabled on second column
        </div>
        <table class="table">
          <thead>
            <tr>
              <th class="sortable sorted desc">
                Column 1 very long column name
              </th>
              <th class="sortable">
                Column 2
              </th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Col 1 cell 1
              </td>
              <td>
                Col 2 cell 1
              </td>
              <td>
                Col 3 cell 1
              </td>
            </tr>
            <tr>
              <td>
                Col 1 cell 2
              </td>
              <td>
                Col 2 cell 2
              </td>
              <td>
                Col 3 cell 2
              </td>
            </tr>
            <tr>
              <td>
                Col 1 cell 3
              </td>
              <td>
                Col 2 cell 3
              </td>
              <td>
                Col 3 cell 3
              </td>
            </tr>
            <tr>
              <td>
                Col 1 cell 4
              </td>
              <td>
                Col 2 cell 4
              </td>
              <td>
                Col 3 cell 4
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
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
      phoneNumber1: '',
      phoneNumber2: '',
    };
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>