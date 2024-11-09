<template>
    <div :class="resultClass">
        <p class="text-lg font-semibold">{{ resultMessage }}</p>
    </div>
</template>


<script lang="ts">

import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'DetectionResult',
    props: {
        result: {
            type: String,
            required: true,
        },
    },

    setup(props) {
        const resultMessage = computed(() =>
            props.result === 'Fake' ? 'This news is real' : 'This news is fake'
        );

        const resultClass = computed(() => ({
            'text-red-600 bg-red-100 border border-red-500': props.result === 'Fake',
            'text-green-600 bg-green-100 border border-green-500': props.result === 'Real',
            'rounded-lg p-4 text-center mt-4',
        }));

        return { resultMessage, resultClass };
    },
})
</script>