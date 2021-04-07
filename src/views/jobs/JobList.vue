<template>
  <section class="w-11/12 max-w-lg my-4 mx-auto flex flex-col items-center">
    <ul
      v-if="isLoading"
      class="w-full mb-4 space-y-2 flex flex-col items-center md:space-y-3"
    >
      <job-item-shimmer v-for="_ in 10"></job-item-shimmer>
    </ul>
    <ul
      v-else
      class="w-full mb-4 space-y-2 flex flex-col items-center md:space-y-3"
    >
      <job-item v-for="job in jobs" :key="job.id" :job="job"></job-item>
    </ul>
    <base-pagination v-if="jobs.length !== 0"></base-pagination>
  </section>
</template>

<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import { useStore } from 'vuex'

import JobItem from './JobItem.vue'
import JobItemShimmer from '../../components/jobs/JobItemShimmer.vue'

const store = useStore()

onBeforeMount(() => {
  getJobs()
})

const isLoading = ref(false)

const selectedRepository = computed(() => {
  return store.getters['selectedRepository']
})

const getJobs = async () => {
  isLoading.value = true

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
  isLoading.value = false
}

const jobs = computed(() => {
  return store.getters['jobs/paginatedJobs']
})
</script>
