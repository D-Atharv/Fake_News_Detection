<template>
  <div :class="resultClass" class="p-6 rounded-xl mt-8 flex items-center justify-center">
    <p class="text-xl font-semibold flex items-center gap-2">
      <span v-if="result === 'Fake'" class="text-red-600">&#10060;</span>
      <span v-else class="text-green-600">&#9989;</span>
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
      'bg-red-50 border border-red-300 text-red-700': props.result === 'Fake',
      'bg-green-50 border border-green-300 text-green-700': props.result === 'Real',
      'max-w-md mx-auto text-center shadow-lg':true
    }));

    return { resultMessage, resultClass };
  },
});
</script>
