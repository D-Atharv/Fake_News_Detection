<template>
  <div :class="resultClass" class="p-6 mt-8 border-t border-gray-500 text-center">
    <p class="text-2xl font-bold uppercase tracking-wide">
      {{ resultMessage }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'DetectionResult',
  props: {
    result: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const resultMessage = computed(() =>
      props.result === 'Fake' ? 'This news appears to be fake.' : 'This news appears to be real.'
    );

    const resultClass = computed(() => ({
      'text-red-700': props.result === 'Fake',
      'text-green-700': props.result === 'Real',
    }));

    return { resultMessage, resultClass };
  },
});
</script>
