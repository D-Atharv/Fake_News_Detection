<template>
  <div class="max-w-2xl mx-auto p-8 bg-white text-gray-900 shadow-lg rounded-md border border-gray-300">
    <h2 class="text-4xl font-bold uppercase text-center tracking-wider mb-6 border-b-2 border-gray-500 pb-2">
      About This App
    </h2>

    <p class="mb-4 text-lg leading-relaxed">
      This app leverages cutting-edge machine learning algorithms to assess the authenticity of news articles,
      helping users distinguish between real and fake news. By analyzing article text, the app provides an accurate
      prediction to promote reliable information.
    </p>
    <p class="mb-4 text-lg leading-relaxed">
      <span class="font-semibold">Naive Bayes Classifier:</span> This classifier estimates probabilities based on word
      occurrences, using Bayes’ theorem to analyze patterns commonly found in real and fake news. It’s highly effective
      for quick, straightforward classifications.
    </p>
    <p class="mb-4 text-lg leading-relaxed">
      <span class="font-semibold">Random Forest Classifier:</span> This algorithm utilizes an ensemble of decision
      trees to improve accuracy, making it ideal for more complex analysis. Together, these methods allow the app to
      provide reliable insights, helping users verify their news sources with confidence.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutView',
});
</script>

<style scoped>
h2 {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  color: #333;
}

p {
  font-family: 'Times New Roman', Times, serif;
  color: #333;
}
</style>
