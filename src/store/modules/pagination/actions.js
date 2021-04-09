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

  loadTotalNumberOfPages (context, payload) {
    const PER_PAGE = 10

    const { repository } = payload

    const totalJobs = context.rootState.jobs.jobs[repository].totalJobs
    if (!totalJobs) {
      return
    }

    const numberOfPages = Math.ceil(totalJobs / PER_PAGE)

    context.commit('setTotalNumberOfPages', { total: numberOfPages })
  },

  setFirstPage (context, payload) {
    context.commit('setIsFirstPage', payload)
  },

  setLastPage (context, payload) {
    context.commit('setIsLastPage', payload)
  }
}
