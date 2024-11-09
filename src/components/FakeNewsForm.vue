<template>
    <div class="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">Check if News is Fake</h2>
        <form @submit.prevent="submitForm">
            <div class="mb-4">
                <label for="title" class="block text-sm font-medium text-gray-700 mb-1">News Title</label>
                <input type="text" id="title" v-model="title" placeholder="Enter the news title" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div class="mb-4">
                <label for="content" class="block text-sm font-medium text-gray-700 mb-1">News Content</label>
                <textarea id="content" v-model="content" placeholder="Enter the news content" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32 resize-none"></textarea>
            </div>
            <button type="submit"
                class="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Check News
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
            emit('submit', {
                title: title.value,
                content: content.value,
            });
        }

        return {
            title,
            content,
            submitForm
        }
    }
})
</script>
