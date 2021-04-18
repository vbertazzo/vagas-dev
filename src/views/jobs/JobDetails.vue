<template>
  <div class="mt-4 flex flex-col items-center p-2 px-4">
    <h1 class="text-xl font-semibold leading-normal mb-2">
      {{ job?.title }}
    </h1>
    <div v-if="isLoading">
      <svg
        class="animate-spin h-8 w-8 text-indigo-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
    <base-divider v-if="!isLoading && !error" class="mt-2"></base-divider>
    <div v-if="error" class="flex flex-col items-center">
      <p class="text-lg leading-7">{{ error }}</p>
      <base-button
        @click="goBack"
        title="Voltar à página inicial"
        text="Voltar"
      ></base-button>
    </div>
    <vue-showdown
      class="prose prose-sm prose-indigo"
      :markdown="job?.body"
      flavor="github"
      :extensions="[removeLineCarriages, removeTags]"
    />
    <a
      v-if="!isLoading && !error"
      class="group my-6 text-sm flex flex-col items-center justify-center focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500 focus:outline-none"
      :href="job?.html_url"
      title="Abrir em GitHub"
    >
      <svg
        fill="none"
        class="h-8 w-8 group-hover:text-indigo-600"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
      >
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        />
      </svg>
      <p class="text-sm group-hover:text-indigo-600">
        Abrir em GitHub
      </p>
    </a>
  </div>
</template>

<script setup>
import { computed, defineProps, onBeforeMount, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const props = defineProps({
  repository: String,
  jobNumber: String
})

const job = ref({})
const error = ref('')
const isLoading = ref(false)

const jobs = computed(() => {
  try {
    const getJobs = store.getters['jobs/jobs'][props.repository].jobs

    return getJobs
  } catch (err) {
    error.value =
      'Ocorreu um erro ao carregar a vaga. Por favor, verifique se as informações sobre o repositório estão corretas.'
  }
})

const findJob = computed(() => {
  return jobs.value.find(job => job.number === +props.jobNumber)
})

const fetchJob = async () => {
  const { repository, jobNumber } = props
  isLoading.value = true
  try {
    const url = `http://localhost:8888/.netlify/functions/jobByNumber?repository=${repository}&jobNumber=${jobNumber}`
    const response = await fetch(url)

    if (!response.ok) {
      let message =
        'Ocorreu um erro ao carregar a vaga. Por favor, tente novamente em breve.'
      if (response.status === 404) {
        message =
          'Vaga não encontrada. Por favor, verifique se as informações estão corretas.'
      }
      throw new Error(message)
    }

    const data = await response.json()
    isLoading.value = false

    return data
  } catch (err) {
    isLoading.value = false
    error.value = err.message
  }
}

onBeforeMount(async () => {
  loadJob()
})

const loadJob = async () => {
  job.value = findJob.value ? findJob.value : await fetchJob()
}

const goBack = () => {
  router.push('/')
}

const removeLineCarriages = () => [
  {
    type: 'lang',
    regex: /\r/g,
    replace: ''
  }
]

const removeTags = () => [
  {
    type: 'lang',
    regex: /<!--[^>]*-->/,
    replace: ''
  }
]
</script>
