<template>
  <div id="app" class="dark flex flex-col min-h-screen bg-darkBg text-darkText">
    <header class="bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white py-6 shadow-lg relative">
      <h1 class="text-4xl font-bold text-center">Fake News Detection App</h1>

      <nav class="absolute top-0 right-0 m-6 space-x-4">
        <router-link to="/" class="text-white hover:text-gray-200 font-medium">Home</router-link>
        <router-link to="/about" class="text-white hover:text-gray-200 font-medium">About</router-link>
      </nav>
    </header>

    <main class="flex-grow flex items-center justify-center p-6">
      <div class="w-full max-w-2xl bg-darkCard shadow-custom-dark rounded-xl p-8 border border-gray-700">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
