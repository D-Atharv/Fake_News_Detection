<template>
  <div id="app" class="dark flex flex-col min-h-screen bg-darkBg text-darkText">
    <!-- Header -->
    <header class="bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white py-6 shadow-lg">
      <h1 class="text-center text-4xl font-bold">Fake News Detection App</h1>
    </header>

    <!-- Main Content Area -->
    <main class="flex-grow flex items-center justify-center p-6">
      <div class="w-full max-w-2xl bg-darkCard shadow-custom-dark rounded-xl p-8 border border-gray-700">
        <router-view />
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-400 py-4 text-center border-t border-gray-700">
      <p class="text-sm">&copy; 2023 Fake News Detection. All rights reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
