<template>
  <div class="relative flex flex-col min-h-screen overflow-hidden">
    <the-header></the-header>

    <router-view v-slot="{ Component }">
      <component
        @touchstart="hideMenuButton"
        @touchend="showMenuButton"
        :is="Component"
      ></component>
    </router-view>

    <transition
      name="bounce"
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__bounceOut"
    >
      <base-fab
        v-if="!menuButtonIsHidden"
        @click="openMenu"
        class="bg-indigo-500 text-white md:hidden"
        :class="menuPosition"
        title="Abrir menu"
        aria-label="Abrir menu"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          /></svg
      ></base-fab>
    </transition>

    <the-menu
      @close-menu="closeMenu"
      @save-settings="loadSettings"
      :menuIsOpen="menuIsOpen"
    ></the-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheMenu from './components/layout/TheMenu.vue'

const menuIsOpen = ref(false)
const menuButtonIsHidden = ref(false)
const menuPosition = ref('bottom-0 right-0 mb-3 mr-3')

const openMenu = () => {
  menuIsOpen.value = true
  document.documentElement.style.overflow = 'hidden'
  document.body.scroll = 'no'
}

const closeMenu = () => {
  menuIsOpen.value = false
  document.documentElement.style.overflow = 'scroll'
  document.body.scroll = 'yes'
}

const hideMenuButton = () => {
  menuButtonIsHidden.value = true
}

const showMenuButton = () => {
  menuButtonIsHidden.value = false
}

const changeMenuButtonPosition = position => {
  const right = 'bottom-0 right-0 mb-3 mr-3'
  const left = 'bottom-0 left-0 mb-3 ml-3'
  menuPosition.value = position === 'right' ? right : left
}

const loadSettings = settings => {
  const { menuButtonPosition } = settings
  changeMenuButtonPosition(menuButtonPosition.value)
  closeMenu()
}
</script>
