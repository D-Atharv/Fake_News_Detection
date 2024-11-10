<template>
  <div class="loading-screen flex items-center justify-center h-screen">
    <div ref="lottieContainer" class="w-96 h-96"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import lottie from 'lottie-web';
import loaderAnimation from '../assets/loader.json';

export default defineComponent({
  name: 'LoadingScreen',
  setup() {
    const lottieContainer = ref(null);

    onMounted(() => {
      if (lottieContainer.value) {
        lottie.loadAnimation({
          container: lottieContainer.value,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: loaderAnimation,
        });
      }
    });

    return { lottieContainer };
  },
});
</script>

<style scoped>
.loading-screen {
  opacity: 0.9;
}
</style>

