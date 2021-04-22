<template>
  <li
    class="w-full max-w-lg p-4 border border-gray-400 rounded-md shadow-sm flex dark:border-indigo-400 dark:bg-gray-900 sm:max-w-xl lg:max-w-2xl lg:p-8"
  >
    <div
      class="h-16 w-16 mr-4 rounded-full animate-pulse flex-shrink-0 bg-gray-400 hidden sm:inline-block"
    ></div>
    <div class="flex flex-col w-full">
      <h1
        class="w-full mb-2 h-5 animate-pulse bg-gray-500 dark:bg-indigo-50 sm:w-11/12 lg:mb-4"
      ></h1>
      <p
        class="w-2/5 leading-relaxed mb-2 h-3 animate-pulse bg-gray-400 dark:bg-indigo-400 sm:w-3/5"
      ></p>
      <div class="flex items-center flex-wrap space-x-1">
        <span
          v-for="_ in numberOfTags"
          class="bg-gray-300 h-4 mt-2 w-8 inline-flex items-center animate-pulse dark:bg-indigo-500 lg:w-16"
        ></span>
      </div>
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
