<template>
    <div class="flex flex-col items-center p-4">
      <FakeNewsForm @submit="handleCheckNews" />
      <DetectionResult v-if="result" :result="result" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import FakeNewsForm from './FakeNewsForm.vue';
  import DetectionResult from './DetectionResult.vue';
  
  export default defineComponent({
    name: 'DetectionView',
    components: { FakeNewsForm, DetectionResult },
    setup() {
      const result = ref<string | null>(null);
  
      const handleCheckNews = async (data: { title: string; content: string }) => {
        // result.value = await checkNews(data);
        result.value = 'false';
      };
  
      return { result, handleCheckNews };
    },
  });
  </script>
  