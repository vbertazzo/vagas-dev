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
    <div
      v-else-if="!error"
      class="w-full mb-4 space-y-2 flex flex-col items-center md:space-y-3"
    >
      <job-item
        v-for="job in jobs"
        :key="job.id"
        :job="job"
        :repository="selectedRepository"
        title="Ver detalhes da vaga"
      ></job-item>
    </div>
    <the-pagination
      v-if="!error && jobs.length !== 0 && !isLoading"
    ></the-pagination>
    <div v-if="error && !isLoading" class="mt-4 flex flex-col items-center">
      <p class="text-lg leading-7">
        Ocorreu um erro ao carregar as vagas. Por favor, tente novamente em
        breve.
      </p>
      <base-button
        @click="reloadPage"
        title="Recarregar página"
        text="Recarregar"
      ></base-button>
    </div>
    <p
      v-if="!error && jobs.length === 0 && !isLoading"
      class="text-lg leading-7"
    >
      Nenhuma vaga encontrada.
    </p>
  </section>
</template>

<script setup>
import { computed, onBeforeMount, onUpdated, ref, watch } from 'vue'
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

onUpdated(() => {
  moveFocustoTopOfPage()
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

const moveFocustoTopOfPage = () => {
  document.body.setAttribute('tabindex', '-1')
  document.body.focus()
  document.body.removeAttribute('tabindex')
}

watch(selectedRepository, () => {
  getJobs()
})

watch(error, value => {
  toast.error(value.error.message)
})
</script>
