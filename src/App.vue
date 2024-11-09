<template>
  <div id="app" class="min-h-screen flex flex-col">
    <header class="bg-blue-600 text-white py-4">
      <h1 class="text-center text-3xl font-bold">Fake News Detection App</h1>
    </header>
    <main class="flex-grow p-4">
      <router-view />
    </main>
    <footer class="bg-gray-100 py-4 border-t border-gray-300 text-center">
      <p class="text-sm text-gray-500">&copy; 2023 Fake News Detection</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
