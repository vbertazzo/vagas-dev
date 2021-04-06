export default {
  setCurrentPage (context, payload) {
    const { page, action } = payload

    const isFirstPage = context.getters['isFirstPage']
    const isLastPage = context.getters['isLastPage']

    if (
      (isFirstPage && action === 'back') ||
      (isLastPage && action === 'next')
    ) {
      return
    }

    context.commit('setCurrentPage', { page })
  },

  async loadTotalNumberOfPages (context, payload) {
    const PER_PAGE = 10

    const { repository } = payload

    context.dispatch('setLoading', { isLoading: true }, { root: true })

    const response = await fetch(
      `.netlify/functions/totalJobs?repository=${repository}`
    )

    if (!response.ok) {
      const error = new Error('Failed to fetch jobs count')
      throw error
    }

    const { jobs } = await response.json()

    const numberOfPages = Math.ceil(jobs / PER_PAGE)

    context.commit('setTotalNumberOfPages', { total: numberOfPages })

    context.dispatch('setLoading', { isLoading: false }, { root: true })
  },

  setFirstPage (context, payload) {
    context.commit('setIsFirstPage', payload)
  },

  setLastPage (context, payload) {
    context.commit('setIsLastPage', payload)
  }
}
