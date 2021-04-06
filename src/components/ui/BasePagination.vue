<template>
  <nav class="flex items-center">
    <button
      @click="handlePageChange('back')"
      :disabled="isLoading || disabled || isFirstPage"
      class="disabled:opacity-25"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
    <p class="mx-2">Página {{ currentPage }} de {{ numberOfPages }}</p>
    <button
      @click="handlePageChange('next')"
      :disabled="isLoading || disabled || isLastPage"
      class="disabled:opacity-25"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </nav>
</template>

<script setup>
import { computed, onBeforeMount, onUnmounted, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const disabled = ref(false)
let timeout = null

onBeforeMount(() => {
  getNumberOfPages()
})

onUnmounted(() => {
  clearTimeout(timeout)
})

onMounted(() => {
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

const getNumberOfPages = async () => {
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

  await store.dispatch('pagination/setCurrentPage', {
    page,
    action
  })

  await store.dispatch('jobs/loadPaginatedJobs', {
    repository: selectedRepository.value,
    page,
    action
  })

  checkFirstAndLastPages()

  window.scrollTo(0, 0)
}
</script>
