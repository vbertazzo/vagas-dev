<template>
  <div>
    <div
      v-if="menuIsOpen"
      @click="$emit('close-menu')"
      class="fixed top-0 left-0 h-screen w-full z-10 cursor-pointer bg-transparent"
    ></div>
    <transition
      name="slide"
      enter-active-class="animate__animated animate__slideInRight animate__faster"
      leave-active-class="animate__animated animate__slideOutRight animate__faster"
    >
      <div
        v-if="menuIsOpen"
        class="fixed z-20 top-0 right-0 h-screen w-2/3 border-l flex flex-col justify-center items-end bg-gray-100"
      >
        <div
          class="mx-auto flex flex-col space-y-4 p-4 rounded-md bg-white shadow-md"
        >
          <div>
            <p class="mb-2 font-semibold">Posição do botão de menu</p>
            <div class="w-7/12 flex flex-col space-y-4">
              <div class="flex justify-between items-center">
                <label for="menu-left">Esquerda:</label>
                <input
                  class="w-6 h-6 text-indigo-500 border-indigo-500 focus:ring-indigo-400"
                  type="radio"
                  id="menu-left"
                  value="left"
                  v-model="menuButtonPosition"
                />
              </div>
              <div class="flex justify-between items-center">
                <label for="menu-right">Direita:</label>
                <input
                  class="w-6 h-6 text-indigo-500 border-indigo-500 focus:ring-indigo-400"
                  type="radio"
                  id="menu-right"
                  value="right"
                  v-model="menuButtonPosition"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            @click="saveSettings"
            class="p-2 border rounded-md text-white bg-indigo-500"
          >
            Salvar
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { defineProps, defineEmit, ref } from 'vue'

const menuButtonPosition = ref('right')

const props = defineProps({
  menuIsOpen: Boolean
})

const saveSettings = () => {
  emit('save-settings', { menuButtonPosition })
}

const emit = defineEmit(['close-menu', 'save-settings'])
</script>
