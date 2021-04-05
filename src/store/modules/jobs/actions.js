export default {
  async loadJobs (context, payload) {
    const API_PER_PAGE = 100

    const { repository, page } = payload

    context.dispatch('setLoading', { isLoading: true }, { root: true })
    const response = await fetch(
      `.netlify/functions/jobs?repository=${repository}&perPage=${API_PER_PAGE}&page=${page}`
    )

    if (!response.ok) {
      console.log('Failed to fetch jobs')
      return
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

  async loadPaginatedJobs (context, payload) {
    const PER_PAGE = 10
    const API_PER_PAGE = 100

    const { repository, page, action } = payload

    const jobs = context.state.jobs[repository].jobs
    const updateThreshold = jobs.length - 20

    const isLastPage = jobs.length % 10 !== 0
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

  setCurrentPage (context, payload) {
    const { repository, page, action } = payload

    const isFirstPage = page === 0
    const isLastPage = context.state.paginatedJobs.length < 10

    if (
      (isFirstPage && action === 'back') ||
      (isLastPage && action === 'next')
    ) {
      return
    }

    context.commit('setCurrentPage', { page })
    context.dispatch('loadPaginatedJobs', { repository, page, action })
  }
}
