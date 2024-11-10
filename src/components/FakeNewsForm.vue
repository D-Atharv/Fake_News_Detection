<template>
  <div>
    <h2 class="text-2xl font-bold text-center mb-4 uppercase">Submit Your News</h2>
    <form @submit.prevent="submitForm" class="space-y-6">
      <div>
        <label for="title" class="block text-sm font-semibold text-gray-800 mb-2 uppercase">
          News Title
        </label>
        <input
          type="text"
          id="title"
          v-model="title"
          placeholder="Enter the news title here"
          required
          class="w-full px-4 py-2 border border-gray-500 rounded-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      </div>

      <div>
        <label for="content" class="block text-sm font-semibold text-gray-800 mb-2 uppercase">
          News Content
        </label>
        <textarea
          id="content"
          v-model="content"
          placeholder="Enter the news content here"
          required
          class="w-full px-4 py-2 border border-gray-500 rounded-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 h-32 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-gray-800 text-white py-2 rounded-sm font-semibold hover:bg-gray-700 border border-gray-600"
      >
        Check News Authenticity
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FakeNewsForm',
  setup(_, { emit }) {
    const title = ref('');
    const content = ref('');

    const submitForm = () => {
      emit('submit', { title: title.value, content: content.value });
    };

    return { title, content, submitForm };
  },
});
</script>
