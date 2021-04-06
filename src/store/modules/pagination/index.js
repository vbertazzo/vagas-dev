import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
  namespaced: true,
  state () {
    return {
      currentPage: 1,
      isFirstPage: false,
      isLastPage: false,
      totalNumberOfPages: null
    }
  },
  actions,
  getters,
  mutations
}
