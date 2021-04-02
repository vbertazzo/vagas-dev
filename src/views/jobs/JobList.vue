<template>
  <section class="my-4 flex justify-center">
    <ul class="max-w-3xl space-y-2 flex flex-col items-center md:space-y-3">
      <job-item v-for="job in jobs" :key="job.id" :job="job"></job-item>
    </ul>
  </section>
</template>

<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import { useStore } from 'vuex'

import JobItem from './JobItem.vue'

const store = useStore()

const selectedRepository = ref('Gommunity')

onBeforeMount(() => {
  getJobs()
})

const getJobs = async () => {
  try {
    await store.dispatch('jobs/loadJobs', {
      repository: selectedRepository.value,
      perPage: 10,
      page: 1
    })
  } catch (error) {
    // error handling
  }
}

const jobs = computed(() => {
  return store.getters['jobs/jobs'][selectedRepository.value]
})
</script>
