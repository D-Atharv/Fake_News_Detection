<template>
  <div class="text-center p-8 bg-white shadow-lg rounded-xl">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">About This App</h2>
    <p class="text-gray-600">
      This app uses machine learning to detect whether a news article is real or fake.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutView',
});
</script>
