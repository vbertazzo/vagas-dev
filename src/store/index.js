import { createStore } from 'vuex'

import jobsModule from './modules/jobs/index.js'
import paginationModule from './modules/pagination/index.js'

const store = createStore({
  modules: { jobs: jobsModule, pagination: paginationModule },
  state () {
    return {
      isLoading: false,
      selectedRepository: 'FrontendBR'
    }
  },
  actions: {
    setLoading (context, payload) {
      context.commit('setLoading', { isLoading: payload.isLoading })
    },
    setSelectedRepository (context, payload) {
      context.commit('setSelectedRepository', payload)
    }
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    },
    selectedRepository (state) {
      return state.selectedRepository
    }
  },
  mutations: {
    setLoading (state, payload) {
      state.isLoading = payload.isLoading
    },
    setSelectedRepository (state, payload) {
      state.selectedRepository = payload
    }
  }
})

export default store
