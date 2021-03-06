<template>
	<section
		class="w-11/12 max-w-lg mt-4 mx-auto flex flex-col flex-grow items-center sm:mt-8 sm:max-w-xl lg:max-w-2xl 2xl:max-w-3xl"
	>
		<ul
			v-if="isLoading && !error"
			class="w-full mb-4 space-y-2 flex flex-col items-center sm:space-y-4"
		>
			<job-item-shimmer v-for="_ in 10"></job-item-shimmer>
		</ul>
		<div
			v-else-if="!error"
			class="w-full mb-4 space-y-2 flex flex-col items-center sm:space-y-4"
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
			class="sm:my-4"
			v-if="!error && jobs.length !== 0 && !isLoading"
		></the-pagination>
		<div v-if="error && !isLoading" class="flex flex-col items-center my-10">
			<p class="text-lg leading-7 dark:text-white mb-10 lg:text-xl">
				Ocorreu um erro ao carregar as vagas. Por favor, tente novamente em
				breve.
			</p>
			<base-button
				@click="reloadPage"
				title="Recarregar página"
				text="Recarregar"
			></base-button>
		</div>
		<div
			v-if="!error && jobs.length === 0 && !isLoading"
			class="flex flex-col items-center my-10"
		>
			<p class="text-lg leading-7 dark:text-white mb-10 lg:text-xl">
				Nenhuma vaga encontrada.
			</p>
			<base-button
				@click="goBack"
				title="Voltar pro começo"
				text="Voltar"
			></base-button>
		</div>
	</section>
</template>

<script setup>
import {
	computed,
	defineProps,
	onBeforeMount,
	onUpdated,
	ref,
	watch
} from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'
import { onBeforeRouteUpdate, useRouter, useRoute } from 'vue-router'

import JobItem from '../../components/jobs/JobItem.vue'
import JobItemShimmer from '../../components/jobs/JobItemShimmer.vue'
import ThePagination from '../../components/layout/ThePagination.vue'

const store = useStore()
const toast = useToast()
const router = useRouter()
const route = useRoute()

onBeforeMount(() => {
	updateSelectedRepository(route.params.repository)
	updateJobList(props.page, route.params.repository)
})

onBeforeRouteUpdate((to, _, next) => {
	const nextPage = to.query.page
	const repository = to.params.repository
	updateJobList(nextPage, repository)
	next()
})

onUpdated(() => {
	moveFocustoTopOfPage()
})

const props = defineProps({
	page: Number
})

const isLoading = ref(false)

const error = computed(() => {
	return store.getters['error']
})

const selectedRepository = computed(() => {
	return store.getters['selectedRepository']
})

const currentPage = computed(() => {
	return store.getters['pagination/currentPage']
})

const jobs = computed(() => {
	return store.getters['jobs/paginatedJobs']
})

const getJobs = async (page = 1, repository = selectedRepository.value) => {
	isLoading.value = true

	try {
		await store.dispatch('jobs/loadJobs', {
			repository,
			page
		})

		store.dispatch('jobs/loadPaginatedJobs', {
			repository,
			page: currentPage.value
		})

		isLoading.value = false
	} catch (err) {
		isLoading.value = false
	}
}

const isPageInvalid = page => {
	return !/^[1-9]\d*$/.test(page)
}

const updateJobList = (nextPage, repository) => {
	let page = +nextPage
	if (isPageInvalid(+nextPage)) {
		page = 1
	}
	updateCurrentPage(page)
	getJobs(page, repository)
}

const updateSelectedRepository = repository => {
	store.dispatch('setSelectedRepository', repository)
}

const updateCurrentPage = (newPage = 1) => {
	store.dispatch('pagination/setCurrentPage', { page: newPage, action: null })
}

const reloadPage = () => {
	window.location.reload()
}

const moveFocustoTopOfPage = () => {
	document.body.setAttribute('tabindex', '-1')
	document.body.focus()
	document.body.removeAttribute('tabindex')
}

const goBack = () => {
	router.push('/')
}

watch(error, value => {
	toast.error(value.error.message)
})
</script>
