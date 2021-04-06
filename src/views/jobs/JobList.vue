<template>
  <section class="my-4 flex flex-col items-center">
    <ul
      class="mb-4 max-w-3xl space-y-2 flex flex-col items-center md:space-y-3"
    >
      <job-item v-for="job in jobs" :key="job.id" :job="job"></job-item>
    </ul>
    <base-pagination v-if="jobs.length !== 0"></base-pagination>
  </section>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'

import JobItem from './JobItem.vue'

const store = useStore()

onBeforeMount(() => {
  getJobs()
})

const selectedRepository = computed(() => {
  return store.getters['selectedRepository']
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
</script>
