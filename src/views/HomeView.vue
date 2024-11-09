<template>
  <div class="w-full max-w-2xl bg-darkCard shadow-custom-dark rounded-xl p-8 border border-gray-700">
    <FakeNewsForm @submit="handleCheckNews" />
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
