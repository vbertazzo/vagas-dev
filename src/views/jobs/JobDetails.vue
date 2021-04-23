<template>
	<div class="flex flex-col items-center py-2 px-4 flex-grow">
		<h1
			class="text-xl font-bold leading-relaxed mt-2 text-gray-800 dark:text-indigo-50 sm:text-2xl sm:mx-16 sm:mb-4 sm:mt-6 lg:text-3xl lg:mt-12 lg:mb-10"
		>
			{{ job?.title }}
		</h1>
		<div v-if="isLoading">
			<svg
				class="animate-spin h-8 w-8 text-indigo-700 motion-reduce:animate-none"
				aria-describedby="loading-title loading-description"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<title id="loading-title">Círculo girando</title>
				<desc id="loading-description">
					Círculo girando enquanto a página carrega
				</desc>
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
		<base-divider v-if="!isLoading && !error"></base-divider>
		<div v-if="error" class="flex flex-col items-center mt-10">
			<p class="text-lg leading-7 dark:text-white mb-10 lg:text-xl">
				{{ error }}
			</p>
			<base-button
				@click="goBack"
				title="Voltar à página inicial"
				text="Voltar"
			></base-button>
		</div>
		<vue-showdown
			class="w-full prose prose-sm prose-indigo dark:prose-dark lg:prose-lg lg:mt-10"
			:markdown="job?.body"
			flavor="github"
			:extensions="[removeLineCarriages, removeTags]"
		/>
		<a
			v-if="!isLoading && !error"
			class="group my-6 p-2 text-sm flex flex-col items-center justify-center focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500 focus:outline-none lg:mt-10"
			:href="job?.html_url"
			title="Abrir em GitHub"
		>
			<svg
				fill="none"
				class="h-8 w-8 group-hover:text-indigo-600 dark:text-indigo-200 dark:group-hover:text-indigo-500 lg:h-12 lg:w-12"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
				/>
			</svg>
			<p
				class="text-sm group-hover:text-indigo-600 dark:text-indigo-200 dark:group-hover:text-indigo-500 lg:text-base"
			>
				Abrir em GitHub
			</p>
		</a>
	</div>
</template>

<script setup>
import { computed, defineProps, onBeforeMount, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import api from '../../services/api.js'

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
		const data = await api.fetchJobByNumber(repository, jobNumber)

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
