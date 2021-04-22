<template>
  <button
    type="button"
    @click="openMenu"
    title=""
    class="mt-2 ml-2 top-0 fixed z-10 w-px h-px overflow-hidden opacity-0 text-center bg-white text-indigo-700 focus:w-16 focus:h-auto focus:overflow-auto focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 sm:focus:w-max lg:right-1/2 lg:transform lg:translate-x-1/2"
  >
    Pular para o menu
  </button>

  <div
    class="relative flex flex-col min-h-screen overflow-hidden dark:bg-gray-800"
  >
    <the-header @open-menu="openMenu"></the-header>

    <router-view v-slot="{ Component }">
      <component
        role="main"
        @touchmove="hideMenuButton"
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
        class="bg-indigo-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 dark:bg-white dark:text-indigo-900 dark:focus:ring-offset-indigo-900 dark:focus:ring-indigo-200 md:hidden"
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

    <teleport to="#app">
      <the-menu
        v-if="!menuIsHidden"
        @close-menu="closeMenu"
        @save-settings="loadSettings"
        :menuIsOpen="menuIsOpen"
      ></the-menu>
    </teleport>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

import TheHeader from './components/layout/TheHeader.vue'
import TheMenu from './components/menu/TheMenu.vue'

const store = useStore()

const menuIsOpen = ref(false)
const menuButtonIsHidden = ref(false)
const menuPosition = ref('bottom-0 right-0 mb-3 mr-3 sm:mb-5 sm:mr-5')

onMounted(() => {
  store.dispatch('loadDarkMode')
})

let menuTimeout

const menuIsHidden = computed(() => {
  menuTimeout = setTimeout(() => {
    return menuIsOpen.value
  }, 3000)
})

const openMenu = () => {
  menuIsOpen.value = true
  document.documentElement.style.overflow = 'hidden'
  document.body.scroll = 'no'
}

const closeMenu = () => {
  menuIsOpen.value = false
  document.documentElement.style.overflow = 'auto'
  document.body.scroll = 'yes'
}

const hideMenuButton = () => {
  menuButtonIsHidden.value = true
}

const showMenuButton = () => {
  menuButtonIsHidden.value = false
}

const changeMenuButtonPosition = position => {
  const right = 'bottom-0 right-0 mb-3 mr-3 sm:mb-5 sm:mr-5'
  const left = 'bottom-0 left-0 mb-3 ml-3 sm:mb-5 sm:ml-5'
  menuPosition.value = position === 'right' ? right : left
}

const loadSettings = settings => {
  const { menuButtonPosition, repository } = settings

  if (repository) {
    store.dispatch('setSelectedRepository', repository)
  }

  changeMenuButtonPosition(menuButtonPosition)
  closeMenu()
}
</script>
