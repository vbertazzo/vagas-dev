<template>
  <section class="my-4 flex justify-center">
    <ul class="max-w-3xl space-y-2 flex flex-col items-center md:space-y-3">
      <job-item v-for="job in jobs" :key="job.id" :job="job"></job-item>
    </ul>
    <button
      @click="handlePageChange('back')"
      :disabled="isLoading || disabled"
      class="border"
    >
      Previous
    </button>
    <p>{{ currentPage }}</p>
    <button
      @click="handlePageChange('next')"
      :disabled="isLoading || disabled"
      class="border"
    >
      Next
    </button>
  </section>
</template>

<script setup>
import { computed, onBeforeMount, onUnmounted, ref } from 'vue'
import { useStore } from 'vuex'

import JobItem from './JobItem.vue'

const store = useStore()

const selectedRepository = ref('FrontendBR')
const disabled = ref(false)
let timeout = null

onBeforeMount(() => {
  getJobs()
})

onUnmounted(() => {
  clearTimeout(timeout)
})

const getJobs = async () => {
  try {
    await store.dispatch('jobs/loadJobs', {
      repository: selectedRepository.value,
      page: 1
    })
    await store.dispatch('jobs/loadPaginatedJobs', {
      repository: selectedRepository.value,
      page: 1
    })
  } catch (error) {
    // TODO: error handling
    console.log(error)
  }
}

const jobs = computed(() => {
  return store.getters['jobs/paginatedJobs']
})

const currentPage = computed(() => {
  return store.getters['jobs/currentPage']
})

const isLoading = computed(() => {
  return store.getters['isLoading']
})

const handlePageChange = async action => {
  disabled.value = true

  timeout = setTimeout(() => {
    disabled.value = false
  }, 300)

  const page = action === 'next' ? currentPage.value + 1 : currentPage.value - 1

  await store.dispatch('jobs/setCurrentPage', {
    repository: selectedRepository.value,
    page,
    action
  })
}
</script>
