<template>
  <div>
    <h2 class="title is-size-3">
      Positions set by the user:
    </h2>
    <p>
      Tooltip position = top-center <tooltip
        message="Tooltip opens above the icon"
        position="top-center"
      />
    </p>
    <br><br>
    <p>
      Tooltip position = bottom-center <tooltip
        message="Tooltip opens below the icon"
        position="bottom-center"
      />
    </p>
    <br><br>
    <p>
      Tooltip position = right <tooltip
        message="Tooltip opens to the right of the icon"
        position="right"
      />
    </p>
    <br><br>
    <p>
      Tooltip position = top-right <tooltip
        message="Tooltip opens to the top of the icon with arrow on the right of the box"
        position="top-right"
      />
    </p>
    <br><br>
    <p>
      Tooltip position = bottom-right <tooltip
        message="Tooltip opens to the bottom of the icon with arrow on the right of the box"
        position="bottom-right"
      />
    </p>
  </div>
</template>

<script>

import { Tooltip } from '@phila/phila-ui';

export default {
  components: {
    Tooltip,
  },
  data () {
    return {};
  },
};
</script>