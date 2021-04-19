<template>
  <li class="w-full max-w-lg px-4 py-2 border rounded-md shadow-sm ">
    <h1 class="w-full mb-2 h-5 animate-pulse bg-gray-500"></h1>
    <p class="w-2/5 leading-relaxed mb-2 h-3 animate-pulse bg-gray-400"></p>
    <div class="flex items-center flex-wrap space-x-1">
      <span
        v-for="_ in numberOfTags"
        class="bg-gray-300 h-4 mt-2 w-8 inline-flex items-center animate-pulse"
      ></span>
    </div>
  </li>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'

const numberOfTags = ref(0)

onBeforeMount(() => {
  numberOfTags.value = randomNumber(2, 7)
})

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}
</script>
