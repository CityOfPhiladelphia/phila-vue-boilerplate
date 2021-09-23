<template>
  <div>
    <code>Headings</code>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <hr>
    <code>Paragraph</code>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam doloribus quo culpa facilis cumque quam quia, esse minus cum magnam neque illo placeat a facere eius beatae, obcaecati minima quae.</p>
    <hr>
    <code>Unordered lists</code>
    <ul>
      <li>List item 1</li>
      <li>
        List item 2:
        <ul>
          <li>Nested item 2.1</li>
          <li>Nested item 2.2</li>
          <li>Nested item 2.3</li>
        </ul>
      </li>
      <li>List item 3</li>
    </ul>
    <hr>
    <code>Ordered lists</code>
    <ol>
      <li>List item 1</li>
      <li>
        List item 2:
        <ol>
          <li>Nested item 2.1</li>
          <li>Nested item 2.2</li>
          <li>Nested item 2.3</li>
        </ol>
      </li>
      <li>List item 3</li>
    </ol>
    <hr>
    <code>Blockquote</code>
    <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde tempora reprehenderit vitae natus nihil corporis sequi aut, adipisci hic eaque harum accusantium debitis cupiditate in quo enim! Deleniti, ullam.</blockquote>
    <hr>
    <code>Text styles</code>
    <p>
      - <em>Italic (em)</em> <br>
      - <strong>Strong (bold)</strong> <br>
      - <a href="#">Link</a><br>
      - Subscript: Water<sub>H2O</sub><br>
      - Superscript: Water<sup>H2O</sup>
    </p>
    <hr>
    <code>Simple table</code>
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Col 1 - Row 1</td>
          <td>Col 2 - Row 1</td>
          <td>Col 3 - Row 1</td>
        </tr>
        <tr>
          <td>Col 1 - Row 2</td>
          <td>Col 2 - Row 2</td>
          <td>Col 3 - Row 2</td>
        </tr>
        <tr>
          <td>Col 1 - Row 3</td>
          <td>Col 2 - Row 3</td>
          <td>Col 3 - Row 3</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Foot Col 1 Row 1</td>
          <td>Foot Col 2 Row 1</td>
          <td>Foot Col 3 Row 1</td>
        </tr>
      </tfoot>
    </table>
    <hr>
    <code>Image</code><br>
    <img
      src="https://www.phila.gov/media/20210519105124/beta-homepage-shade.jpg"
      alt="img alt"
    >
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
