<template>
  <div class="space-y-8">
    <h2 class="text-3xl font-bold uppercase text-center border-b-2 pb-2 border-gray-500">
      News Authenticity Check
    </h2>

    <p class="text-center italic text-gray-600">
      Enter a news title and content below to determine if it's real or fake.
    </p>

    <FakeNewsForm @submit="handleCheckNews" />

    <DetectionResult v-if="result" :result="result" />
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

    const handleCheckNews = async (data: NewsData) => {
      console.log('Received data from FakeNewsForm:', data) // Debugging: Check data format

      // Check if title and content are non-empty strings before passing to API
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

      // Call the API if data is valid
      result.value = await checkNews(data)
    }

    return { result, handleCheckNews }
  },
})
</script>
