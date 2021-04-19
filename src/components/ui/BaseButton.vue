<template>
  <button
    type="button"
    class="mt-4 py-3 px-6 uppercase font-semibold text-white text-lg leading-6 border border-transparent rounded-xl bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 focus:outline-none shadow transition-colors duration-200"
  >
    {{ text }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  text: String
})
</script>
