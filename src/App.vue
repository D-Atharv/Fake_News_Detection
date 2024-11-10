<template>
  <div v-if="isLoading" class="flex items-center justify-center min-h-screen bg-gray-100">
    <LoadingScreen />
  </div>

  <div v-else id="app" class="flex flex-col min-h-screen bg-gray-100 text-gray-900 font-serif bg-cover bg-center"
    :style="{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }">
    <div class="absolute inset-0 bg-gray-100 opacity-60"></div>

    <header class="border-b-2 border-gray-500 p-4 sm:p-6 bg-white relative z-10">
      <div class="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between">
        <h1 class="text-2xl sm:text-4xl font-bold uppercase tracking-wider text-center flex-grow mb-4 sm:mb-0">
          Fake News Detection Gazette
        </h1>

        <nav class="flex space-x-4">
          <router-link to="/" class="text-gray-800 hover:text-gray-500 font-medium">Home</router-link>
          <router-link to="/about" class="text-gray-800 hover:text-gray-500 font-medium">About</router-link>
        </nav>
      </div>

      <div class="text-center mt-2">
        <p class="text-gray-600 italic text-xs sm:text-sm">{{ currentDate }}</p>
      </div>
    </header>

    <main class="flex-grow flex items-center justify-center py-8 sm:py-12 px-4 relative z-10">
      <div class="w-full max-w-md sm:max-w-2xl bg-white shadow-lg rounded-md p-4 sm:p-8 border border-gray-300">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoadingScreen from './components/LoadingScreen.vue';
import backgroundImage from './assets/newspaper.jpg';

export default defineComponent({
  name: 'App',
  components: { LoadingScreen },
  data() {
    return {
      backgroundImage,
      currentDate: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
});
</script>
