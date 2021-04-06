import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
  namespaced: true,
  state () {
    return {
      jobs: {
        AndroidDevBr: {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null
        },
        'Backend-BR': {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null
        },
        CocoaHeadsBrasil: {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null
        },
        FrontendBR: {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null
        },
        Gommunity: {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null
        },
        PHPDevBR: {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null
        },
        UXBrasil: {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null
        },
        'Vuejs-BR': {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null
        }
      },
      paginatedJobs: []
    }
  },
  actions,
  getters,
  mutations
}
