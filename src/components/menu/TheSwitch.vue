<template>
  <div class="flex justify-between items-center">
    <h2 class="dark:text-white">Modo Escuro:</h2>
    <div
      @click="handleSwitchChange"
      @keydown.space="handleSwitchChange"
      class="w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 focus:outline-none"
      :class="{ 'bg-indigo-600': toggleActive }"
      tabindex="0"
    >
      <div
        class="bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out"
        :class="{ 'translate-x-6': toggleActive }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const toggleActive = computed(() => {
  return store.getters['darkMode']
})

const handleSwitchChange = () => {
  store.dispatch('setDarkMode', !toggleActive.value)
}
</script>
