<template>
  <section
    class="w-11/12 max-w-lg my-4 mx-auto flex flex-col items-center justify-center"
  >
    <ul
      v-if="isLoading && !error"
      class="w-full mb-4 space-y-2 flex flex-col items-center md:space-y-3"
    >
      <job-item-shimmer v-for="_ in 10"></job-item-shimmer>
    </ul>
    <ul
      v-else-if="!error"
      class="w-full mb-4 space-y-2 flex flex-col items-center md:space-y-3"
    >
      <job-item
        v-for="job in jobs"
        :key="job.id"
        :job="job"
        :repository="selectedRepository"
      ></job-item>
    </ul>
    <the-pagination
      v-if="!error && jobs.length !== 0 && !isLoading"
    ></the-pagination>
    <div v-if="error && !isLoading" class="mt-4 flex flex-col items-center">
      <p class="text-lg">
        Ocorreu um erro ao carregar as vagas. Por favor, tente novamente em
        breve.
      </p>
      <button
        type="button"
        @click="reloadPage"
        title="Recarregar página"
        class="mt-4 py-3 px-6 uppercase font-semibold text-white text-lg leading-6 border border-transparent rounded-xl bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 focus:outline-none transition-colors duration-200"
      >
        Recarregar página
      </button>
    </div>
    <p v-if="!error && jobs.length === 0 && !isLoading" class="text-lg">
      Nenhuma vaga encontrada.
    </p>
  </section>
</template>

<script setup>
import { computed, onBeforeMount, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'

import JobItem from './JobItem.vue'
import JobItemShimmer from '../../components/jobs/JobItemShimmer.vue'
import ThePagination from '../../components/layout/ThePagination.vue'

const store = useStore()
const toast = useToast()

onBeforeMount(() => {
  getJobs()
})

const isLoading = ref(false)

const error = computed(() => {
  return store.getters['error']
})

const selectedRepository = computed(() => {
  return store.getters['selectedRepository']
})

const jobs = computed(() => {
  return store.getters['jobs/paginatedJobs']
})

const getJobs = async () => {
  isLoading.value = true

  try {
    await store.dispatch('jobs/loadJobs', {
      repository: selectedRepository.value,
      page: 1
    })

    store.dispatch('jobs/loadPaginatedJobs', {
      repository: selectedRepository.value,
      page: 1
    })

    isLoading.value = false
  } catch (err) {
    isLoading.value = false
  }
}

const reloadPage = () => {
  window.location.reload()
}

watch(selectedRepository, () => {
  getJobs()
})

watch(error, value => {
  toast.error(value.error.message)
})
</script>
