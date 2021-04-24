import api from '../../../services/api.js'

export default {
	async loadJobs (context, payload) {
		const API_PER_PAGE = 100

		const { repository, page } = payload

		const apiPage = convertInternalPageToApiPage(page)

		if (context.state.jobs[repository].jobs[apiPage]) {
			return
		}

		context.dispatch('setLoading', { isLoading: true }, { root: true })

		const { totalJobs } = context.state.jobs[repository]

		if (!totalJobs) {
			context.dispatch('fetchTotalJobs', { repository })
		}

		try {
			const data = await api.fetchJobs(repository, API_PER_PAGE, apiPage)

			context.commit('loadJobs', { repository, jobs: data, section: apiPage })
		} catch (error) {
			context.dispatch('setError', { error }, { root: true })
		}

		context.dispatch('setLoading', { isLoading: false }, { root: true })
	},

	loadPaginatedJobs (context, payload) {
		const PER_PAGE = 10

		const { repository, page, action } = payload

		const section = convertInternalPageToApiPage(page)
		const jobs = context.state.jobs[repository].jobs[section]

		const pageRange = getPageRange(page)
		const startingIndex = pageRange === 1 ? 0 : pageRange * PER_PAGE - PER_PAGE
		const endingIndex = pageRange * PER_PAGE
		const paginatedJobs = jobs.slice(startingIndex, endingIndex)

		context.commit('setPaginatedJobs', { paginatedJobs })

		const shouldFetchMoreJobs = jobs.length === 0

		if (shouldFetchMoreJobs) {
			const nextPage = action === 'back' ? page - 1 : page + 1

			context.dispatch('loadJobs', {
				repository,
				page: nextPage
			})
		}
	},

	async fetchTotalJobs (context, payload) {
		const { repository } = payload

		context.dispatch('setLoading', { isLoading: true }, { root: true })

		try {
			const { jobs } = await api.fetchTotalJobs(repository)
			context.commit('setTotalJobs', { repository, totalJobs: jobs })
		} catch (error) {
			context.dispatch('setError', { error }, { root: true })
		}

		context.dispatch('setLoading', { isLoading: false }, { root: true })
	}
}

const convertInternalPageToApiPage = page => {
	if (page % 10 === 0) {
		return +`${page / 10}`.split('.')[0]
	}
	return +`${page / 10 + 1}`.split('.')[0]
}

const getPageRange = page => {
	if (page % 10 === 0) {
		return 10
	}
	return +`${page / 10}`.split('.')[1]
}
