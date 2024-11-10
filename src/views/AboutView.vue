<template>
  <div class="max-w-2xl mx-auto p-8 bg-gray-800 text-gray-200 shadow-lg rounded-xl">
    <h2 class="text-3xl font-semibold text-center mb-4">About This App</h2>
    <p class="mb-4">
      This app uses machine learning to determine the authenticity of news articles, leveraging Naive Bayes and Random
      Forest algorithms to analyze article text.
    </p>
    <p class="mb-4">
      The Naive Bayes classifier estimates probabilities based on word occurrences, while the Random Forest classifier
      applies an ensemble of decision trees to improve accuracy. With these methods, this app reliably identifies fake
      news articles and helps users verify their sources.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutView',
});
</script>
