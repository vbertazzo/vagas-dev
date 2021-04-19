<template>
  <div>
    <div>
      <label class="font-semibold" for="repository">Repositório</label>
      <select
        class="w-full mt-2 text-indigo-700 border-gray-00 rounded-md focus:border-indigo-400 focus:ring-indigo-400 shadow"
        id="repository"
        v-model="selectedRepository"
        @change="selectRepository"
      >
        <option
          v-for="repository in repositories"
          :key="repository"
          :value="repository"
          >{{ repository }}</option
        >
      </select>
    </div>
  </div>
</template>

<script setup>
import { defineEmit } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const emit = defineEmit(['select-repository'])

const selectedRepository = store.getters['selectedRepository']
const repositories = [
  'AndroidDevBr',
  'Backend-BR',
  'CocoaHeadsBrasil',
  'FrontendBR',
  'Gommunity',
  'PHPDevBR',
  'UXBrasil',
  'Vuejs-BR'
]

const selectRepository = async e => {
  const newRepository = e.target.value
  emit('select-repository', newRepository)
}
</script>
