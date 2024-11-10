<template>
  <div class="space-y-8">
    <!-- Headline -->
    <h2 class="text-3xl font-bold uppercase text-center border-b-2 pb-2 border-gray-500">
      News Authenticity Check
    </h2>
    <!-- Subtitle -->
    <p class="text-center italic text-gray-600">
      Enter a news title and content below to determine if it’s real or fake.
    </p>

    <!-- Fake News Form Component -->
    <FakeNewsForm @submit="handleCheckNews" />

    <!-- Display Result -->
    <DetectionResult v-if="result" :result="result" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FakeNewsForm from '../components/FakeNewsForm.vue';
import DetectionResult from '../components/DetectionResult.vue';
import { checkNews } from '../../services/api';
import type { NewsData } from '../../services/api';

export default defineComponent({
  name: 'HomeView',
  components: { FakeNewsForm, DetectionResult },
  setup() {
    const result = ref<string | null>(null);

    const handleCheckNews = async (data: NewsData) => {
      result.value = await checkNews(data);
    };

    return { result, handleCheckNews };
  },
});
</script>
