<template>
  <div
    id="app"
    class="flex flex-col min-h-screen bg-gray-100 text-gray-900 font-serif bg-cover bg-center"
    :style="{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div class="absolute inset-0 bg-gray-100 opacity-60"></div>

    <header class="border-b-2 border-gray-500 p-6 bg-white relative z-10">
      <div class="container mx-auto flex items-center justify-center">
        <h1 class="text-4xl font-bold uppercase tracking-wider text-center flex-grow">
          Fake News Detection Gazette
        </h1>

        <nav class="flex space-x-4 absolute top-6 right-6">
          <router-link to="/" class="text-gray-800 hover:text-gray-500 font-medium">Home</router-link>
          <router-link to="/about" class="text-gray-800 hover:text-gray-500 font-medium">About</router-link>
        </nav>
      </div>

      <div class="text-center mt-2">
        <p class="text-gray-600 italic text-sm">{{ currentDate }}</p>
      </div>
    </header>

    <main class="flex-grow flex items-center justify-center py-12 px-4 relative z-10">
      <div class="w-full max-w-2xl bg-white shadow-lg rounded-md p-8 border border-gray-300">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import backgroundImage from './assets/newspaper.jpg';

export default defineComponent({
  name: 'App',
  data() {
    return {
      backgroundImage,
      currentDate: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };
  },
});
</script>

<style scoped>
#app {
  background-attachment: fixed;
}

body {
  font-family: 'Times New Roman', Times, serif;
  color: #333;
}
</style>
