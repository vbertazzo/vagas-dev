<template>
  <div>
    <div
      v-if="menuIsOpen"
      @click="$emit('close-menu')"
      title="Clique para fechar o menu"
      class="fixed top-0 left-0 h-screen w-full z-10 cursor-pointer bg-gray-900 bg-opacity-70"
    ></div>
    <transition
      name="slide"
      enter-active-class="animate__animated animate__slideInRight animate__faster"
      leave-active-class="animate__animated animate__slideOutRight animate__faster"
    >
      <div
        v-if="menuIsOpen"
        class="fixed z-20 top-0 right-0 bottom-0 w-10/12 py-4 border-l flex flex-col justify-center items-end bg-gray-100 dark:bg-gray-800 dark:border-indigo-400 sm:w-max"
      >
        <div
          class="w-11/12 mx-auto flex flex-col justify-center p-4 rounded-md bg-white shadow-md dark:bg-gray-900"
        >
          <h2 class="font-bold text-lg text-center dark:text-white lg:text-2xl">
            Menu
          </h2>

          <base-divider />

          <div class="px-4 md:hidden">
            <p class="font-semibold dark:text-white">
              Posição do botão de menu
            </p>
            <div class="mt-2 w-7/12 flex flex-col space-y-3">
              <div class="flex justify-between items-center dark:text-white">
                <label for="menu-left">Esquerda:</label>
                <input
                  class="h-6 w-6 text-indigo-600 border-gray-400 focus:ring-indigo-500 shadow"
                  type="radio"
                  id="menu-left"
                  value="left"
                  v-model="menuButtonPosition"
                  v-focus
                />
              </div>
              <div class="flex justify-between items-center dark:text-white">
                <label for="menu-right">Direita:</label>
                <input
                  class="h-6 w-6 text-indigo-600 border-gray-400 focus:ring-indigo-500 shadow"
                  type="radio"
                  id="menu-right"
                  value="right"
                  v-model="menuButtonPosition"
                />
              </div>
            </div>
          </div>

          <base-divider class="md:hidden" />

          <the-switch></the-switch>

          <base-divider />

          <the-filter @select-repository="handleRepositoryChange"></the-filter>

          <base-divider />

          <base-button
            @click="saveSettings"
            title="Aplicar Configurações"
            text="Aplicar"
          ></base-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmit, ref } from 'vue'
import { useStore } from 'vuex'

import TheFilter from './filter/TheFilter.vue'
import TheSwitch from './TheSwitch.vue'

const store = useStore()

const props = defineProps({
  menuIsOpen: Boolean
})

const emit = defineEmit(['close-menu', 'save-settings'])

const menuButtonPosition = ref('right')

const selectedRepository = computed(() => {
  return store.getters['selectedRepository']
})

const settings = {}

const saveSettings = () => {
  emit('save-settings', {
    ...settings,
    menuButtonPosition: menuButtonPosition.value
  })
}

const handleRepositoryChange = newRepository => {
  settings.repository = newRepository
}
</script>
