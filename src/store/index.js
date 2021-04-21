import { createStore } from 'vuex'

import jobsModule from './modules/jobs/index.js'
import paginationModule from './modules/pagination/index.js'

const store = createStore({
  modules: { jobs: jobsModule, pagination: paginationModule },
  state () {
    return {
      isLoading: false,
      selectedRepository: 'FrontendBR',
      error: null,
      darkMode: false
    }
  },
  actions: {
    setLoading (context, payload) {
      context.commit('setLoading', { isLoading: payload.isLoading })
    },
    setSelectedRepository (context, payload) {
      context.dispatch(
        'pagination/setCurrentPage',
        {
          page: 1,
          action: null
        },
        { root: true }
      )
      context.commit('setSelectedRepository', payload)
    },
    setError (context, payload) {
      context.commit('setError', payload)
    },
    loadDarkMode (context) {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        context.commit('setDarkMode', true)
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        context.commit('setDarkMode', false)
      }
    },
    setDarkMode (context, payload) {
      const isDarkModeSelected = payload

      localStorage.setItem('theme', isDarkModeSelected ? 'dark' : 'light')
      context.commit('setDarkMode', isDarkModeSelected)

      context.dispatch('loadDarkMode')
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
    },
    darkMode (state) {
      return state.darkMode
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
    setDarkMode (state, payload) {
      state.darkMode = payload
    }
  }
})

export default store
