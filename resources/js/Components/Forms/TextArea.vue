<script setup>
import { onMounted, ref } from 'vue';
defineProps({
    modelValue: String,
    rows: {
        type: Number,
        default: 5
    },
    
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <textarea
        ref="input"
        class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-accent-light focus:ring-opacity-50 rounded-md shadow-sm"
        :value="modelValue" :rows="rows"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>
