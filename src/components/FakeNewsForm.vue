<template>
  <div>
    <h2 class="text-2xl font-semibold text-center mb-4">Check News Authenticity</h2>
    <p class="text-gray-400 text-center mb-8">Enter the news title and content to detect if it's fake.</p>
    <form @submit.prevent="submitForm" class="space-y-6">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-400 mb-2">News Title</label>
        <input
          type="text"
          id="title"
          v-model="title"
          placeholder="E.g., 'New Health Breakthrough'"
          required
          class="w-full px-4 py-3 border border-gray-600 rounded-lg bg-darkBg text-darkText focus:outline-none focus:ring-2 focus:ring-primaryAccent"
        />
      </div>
      <div>
        <label for="content" class="block text-sm font-medium text-gray-400 mb-2">News Content</label>
        <textarea
          id="content"
          v-model="content"
          placeholder="Enter the news content here"
          required
          class="w-full px-4 py-3 border border-gray-600 rounded-lg bg-darkBg text-darkText focus:outline-none focus:ring-2 focus:ring-primaryAccent h-32 resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white font-semibold py-3 rounded-lg hover:shadow-lg transition duration-300"
      >
        Detect Fake News
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineEmits } from 'vue';

export default defineComponent({
  name: 'FakeNewsForm',
  setup() {
    const title = ref('');
    const content = ref('');
    const emit = defineEmits(['submit']);

    const submitForm = () => {
      emit('submit', { title: title.value, content: content.value });
    };

    return { title, content, submitForm };
  },
});
</script>
