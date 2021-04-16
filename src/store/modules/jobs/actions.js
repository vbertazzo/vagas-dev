export default {
  async loadJobs (context, payload) {
    const API_PER_PAGE = 100

    const { repository, page } = payload

    const { retrievedPages, totalJobs } = context.state.jobs[repository]

    if (retrievedPages >= page) {
      return
    }

    context.dispatch('setLoading', { isLoading: true }, { root: true })

    if (!totalJobs) {
      context.dispatch('fetchTotalJobs', { repository })
    }

    const response = await fetch(
      `.netlify/functions/jobs?repository=${repository}&perPage=${API_PER_PAGE}&page=${page}`
    )

    if (!response.ok) {
      const error = new Error(
        'Ocorreu um erro ao carregar as vagas. Por favor, tente novamente em breve.'
      )
      context.dispatch('setError', { error }, { root: true })
    }

    const responseData = await response.json()

    context.commit('loadJobs', { repository, jobs: responseData })
    context.commit('setLastFetched', { repository })
    context.commit('setRetrievedPages', {
      repository,
      amount: page
    })

    context.dispatch('setLoading', { isLoading: false }, { root: true })
  },

  loadPaginatedJobs (context, payload) {
    const PER_PAGE = 10
    const API_PER_PAGE = 100
    const UPDATE_THRESHOLD = 80

    const { repository, page, action } = payload

    const jobs = context.state.jobs[repository].jobs
    const updateThreshold = jobs.length - (API_PER_PAGE - UPDATE_THRESHOLD)

    const isLastPage = jobs.length % PER_PAGE !== 0
    const startingIndex = page === 1 ? 0 : page * PER_PAGE - PER_PAGE
    const endingIndex = page * PER_PAGE

    const paginatedJobs = jobs.slice(startingIndex, endingIndex)

    context.commit('setPaginatedJobs', { paginatedJobs })

    const currentProgress = page * PER_PAGE

    if (action === 'back') {
      return
    }

    const shouldFetchMoreJobs = currentProgress >= updateThreshold

    if (shouldFetchMoreJobs && !isLastPage) {
      const lastRetrievedPage = context.state.jobs[repository].retrievedPages
      const nextPage = Math.trunc(Math.ceil(jobs.length / API_PER_PAGE) + 1)

      if (lastRetrievedPage >= nextPage) {
        return
      }

      context.dispatch('loadJobs', {
        repository,
        page: nextPage
      })
    }
  },

  async fetchTotalJobs (context, payload) {
    const { repository } = payload

    context.dispatch('setLoading', { isLoading: true }, { root: true })
    const response = await fetch(
      `.netlify/functions/totalJobs?repository=${repository}`
    )

    if (!response.ok) {
      const error = new Error(
        'Ocorreu um erro ao carregar as vagas. Por favor, tente novamente em breve.'
      )
      context.dispatch('setError', { error }, { root: true })
    }

    const { jobs } = await response.json()

    context.commit('setTotalJobs', { repository, totalJobs: jobs })
    context.dispatch('setLoading', { isLoading: false }, { root: true })
  }
}
