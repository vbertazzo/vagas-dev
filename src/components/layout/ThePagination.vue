<template>
  <nav class="flex items-center" aria-label="Paginação">
    <button
      @click="handlePageChange('back')"
      :disabled="isLoading || disabled || isFirstPage"
      :aria-disabled="isLoading || disabled || isFirstPage"
      class="disabled:opacity-25 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 focus:outline-none dark:text-indigo-300"
      title="Página anterior"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span class="sr-only">Página anterior</span>
    </button>
    <p class="mx-2 dark:text-indigo-200">
      Página {{ currentPage }} de {{ numberOfPages }}
    </p>
    <button
      @click="handlePageChange('next')"
      :disabled="isLoading || disabled || isLastPage"
      :aria-disabled="isLoading || disabled || isFirstPage"
      class="disabled:opacity-25 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 focus:outline-none dark:text-indigo-300"
      title="Próxima página"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
      <span class="sr-only">Próxima página</span>
    </button>
  </nav>
</template>

<script setup>
import { computed, onUnmounted, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const disabled = ref(false)
let timeout = null

onUnmounted(() => {
  clearTimeout(timeout)
})

onMounted(() => {
  loadNumberOfPages()
  checkFirstAndLastPages()
})

const selectedRepository = computed(() => {
  return store.getters['selectedRepository']
})

const currentPage = computed(() => {
  return store.getters['pagination/currentPage']
})

const isLoading = computed(() => {
  return store.getters['isLoading']
})

const numberOfPages = computed(() => {
  return store.getters['pagination/totalNumberOfPages']
})

const isFirstPage = computed(() => {
  return store.getters['pagination/isFirstPage']
})

const isLastPage = computed(() => {
  return store.getters['pagination/isLastPage']
})

const totalJobs = computed(() => {
  return store.getters['jobs/jobs'][selectedRepository.value].totalJobs
})

const loadNumberOfPages = async () => {
  await store.dispatch('pagination/loadTotalNumberOfPages', {
    repository: selectedRepository.value
  })
}

const checkFirstAndLastPages = () => {
  const isFirstPage = currentPage.value === 1
  const isLastPage = currentPage.value === numberOfPages.value
  store.dispatch('pagination/setFirstPage', isFirstPage)
  store.dispatch('pagination/setLastPage', isLastPage)
}

const handlePageChange = async action => {
  disabled.value = true

  timeout = setTimeout(() => {
    disabled.value = false
  }, 300)

  const page = action === 'next' ? currentPage.value + 1 : currentPage.value - 1

  store.dispatch('pagination/setCurrentPage', {
    page,
    action
  })

  store.dispatch('jobs/loadPaginatedJobs', {
    repository: selectedRepository.value,
    page,
    action
  })

  checkFirstAndLastPages()
  moveScrollToTop()
}

const moveScrollToTop = () => {
  window.scrollTo(0, 0)
}

watch(selectedRepository, () => {
  checkFirstAndLastPages()
  moveScrollToTop()
})

watch(totalJobs, () => {
  loadNumberOfPages()
})
</script>
