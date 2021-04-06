export default {
  setCurrentPage (state, payload) {
    state.currentPage = payload.page
  },
  setTotalNumberOfPages (state, payload) {
    state.totalNumberOfPages = payload.total
  },
  setIsFirstPage (state, payload) {
    state.isFirstPage = payload
  },
  setIsLastPage (state, payload) {
    state.isLastPage = payload
  }
}
