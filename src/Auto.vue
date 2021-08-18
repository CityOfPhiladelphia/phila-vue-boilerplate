<template>
  <div>
    <h2 class="title is-size-3">
      Auto positioning (recommended)
    </h2>
    <div class="subtitle is-size-3">
      The tooltip position is automatically calculated based on screen space.
    </div>
    <p>
      Tooltip with 250 chars (max) - default mode <tooltip
        message="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."
      />
    </p>
    <br><br><br>
    <p>
      Tooltip with 250 chars (max) - light mode <tooltip
        message="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."
        mode="light"
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