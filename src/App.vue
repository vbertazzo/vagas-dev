<template>
  <div class="flex flex-col min-h-screen">
    <the-header></the-header>
    <router-view v-slot="{ Component }">
      <component class="flex-grow" :is="Component"></component>
    </router-view>
  </div>
</template>

<script setup>
import TheHeader from './components/layout/TheHeader.vue'
</script>
