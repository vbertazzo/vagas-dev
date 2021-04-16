import { createStore } from 'vuex'

import jobsModule from './modules/jobs/index.js'
import paginationModule from './modules/pagination/index.js'

const store = createStore({
  modules: { jobs: jobsModule, pagination: paginationModule },
  state () {
    return {
      isLoading: false,
      selectedRepository: 'FrontendBR',
      error: null
    }
  },
  actions: {
    setLoading (context, payload) {
      context.commit('setLoading', { isLoading: payload.isLoading })
    },
    setSelectedRepository (context, payload) {
      context.commit('setSelectedRepository', payload)
    },
    setError (context, payload) {
      context.commit('setError', payload)
    },
    dismissError (context) {
      context.commit('dismissError')
    }
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    },
    selectedRepository (state) {
      return state.selectedRepository
    },
    error (state) {
      return state.error
    }
  },
  mutations: {
    setLoading (state, payload) {
      state.isLoading = payload.isLoading
    },
    setSelectedRepository (state, payload) {
      state.selectedRepository = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    dismissError (state) {
      state.error = null
    }
  }
})

export default store
