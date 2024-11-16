<template>
  <div class="space-y-8 relative">
    <h2 class="text-3xl font-bold uppercase text-center border-b-2 pb-2 border-gray-500">
      News Authenticity Check
    </h2>

    <p class="text-center italic text-gray-600">
      Enter a news title and content below to determine if it's real or fake.
    </p>

    <FakeNewsForm @submit="handleCheckNews" />

    <div v-if="loading" class="fixed inset-0 flex flex-col justify-center items-center bg-white bg-opacity-80 z-50">
      <div class="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      <p class="text-gray-600 italic mt-4">Fetching prediction...</p>
    </div>

    <DetectionResult v-if="result && !loading" :result="result" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FakeNewsForm from '../components/FakeNewsForm.vue'
import DetectionResult from '../components/DetectionResult.vue'
import { checkNews } from '../../services/api'
import type { NewsData } from '../../services/api'

export default defineComponent({
  name: 'HomeView',
  components: { FakeNewsForm, DetectionResult },
  setup() {
    const result = ref<string | null>(null)
    const loading = ref(false)

    const handleCheckNews = async (data: NewsData) => {
      console.log('Received data from FakeNewsForm:', data)

      if (!data.title || typeof data.title !== 'string' || !data.title.trim()) {
        console.error('Title is required and must be a non-empty string')
        result.value = 'Error: Title is required and must be a non-empty string'
        return
      }
      if (!data.content || typeof data.content !== 'string' || !data.content.trim()) {
        console.error('Content is required and must be a non-empty string')
        result.value = 'Error: Content is required and must be a non-empty string'
        return
      }

      loading.value = true
      try {
        result.value = await checkNews(data)
      } finally {
        loading.value = false
      }
    }

    return { result, loading, handleCheckNews }
  },
})
</script>
