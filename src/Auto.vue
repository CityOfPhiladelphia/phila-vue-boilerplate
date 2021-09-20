<template>
  <div>
    Close to top <tooltip
      message="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cmm sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."
    />
    <br><br><br>
    <p>
      Close to left <tooltip
        message="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cam nascetur ridiculus mus. Donec quam felis eu, pretium."
      />
    </p>
    <br><br><br>
    <p>
      Short text tooltip <tooltip
        message="Lorem ipsum dolor amet"
      />
    </p>
    <br><br><br>
    <p>
      Tooltip with 250 chars (max) - light mode <tooltip
        message="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Com sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."
        mode="light"
      />
    </p>
    <br>
    <br>
    <br>
    <div class="columns">
      <div class="column is-4">
        <p>
          Tooltip icon wrapping with text Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. <tooltip
            message="Coum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."
          />
        </p>
      </div>
    </div>
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