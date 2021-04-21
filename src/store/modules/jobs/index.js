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
          retrievedPages: null,
          totalJobs: null
        },
        'Backend-BR': {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null,
          totalJobs: null
        },
        CocoaHeadsBrasil: {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null,
          totalJobs: null
        },
        DotNetDevBR: {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null,
          totalJobs: null
        },
        FrontendBR: {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null,
          totalJobs: null
        },
        FlutterBR: {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null,
          totalJobs: null
        },
        Gommunity: {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null,
          totalJobs: null
        },
        PHPDevBR: {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null,
          totalJobs: null
        },
        'QA-Brasil': {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null,
          totalJobs: null
        },
        'React-Brasil': {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null,
          totalJobs: null
        },
        UXBrasil: {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null,
          totalJobs: null
        },
        'Vuejs-BR': {
          jobs: [],
          labels: [],
          lastFetched: null,
          retrievedPages: null,
          totalJobs: null
        }
      },
      paginatedJobs: []
    }
  },
  actions,
  getters,
  mutations
}
