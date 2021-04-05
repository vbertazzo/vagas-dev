import { createStore } from 'vuex'

import jobsModule from './modules/jobs/index.js'

const store = createStore({
  modules: { jobs: jobsModule },
  state () {
    return {
      isLoading: false
    }
  },
  actions: {
    setLoading (context, payload) {
      context.commit('setLoading', { isLoading: payload.isLoading })
    }
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    }
  },
  mutations: {
    setLoading (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})

export default store
