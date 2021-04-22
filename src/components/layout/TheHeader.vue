<template>
  <header class="flex flex-col justify-center items-center">
    <div
      class="mt-3 w-full flex justify-center items-center md:max-w-xl md:justify-between md:px-2 md:items-baseline lg:max-w-3xl xl:max-w-4xl"
    >
      <router-link
        to="/"
        class="focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 focus:outline-none"
      >
        <h1
          class="text-2xl font-bold uppercase text-indigo-700 dark:text-indigo-300"
          aria-hidden="true"
        >
          {{ '<vagas dev />' }}
        </h1>
        <h1 class="sr-only">Vagas dev</h1>
      </router-link>
      <button
        @click="openMenu"
        class="text-indigo-700 hover:text-indigo-900 text-xl font-bold hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 focus:outline-none dark:text-indigo-300 dark:hover:text-white md:inline-block"
        title="Abrir menu"
        aria-label="Abrir menu"
      >
        Menu
      </button>
    </div>
    <base-divider class="mb-0"></base-divider>
  </header>
</template>

<script setup>
import { defineEmit } from 'vue'

const emit = defineEmit(['open-menu'])

const openMenu = () => {
  emit('open-menu')
}
</script>
