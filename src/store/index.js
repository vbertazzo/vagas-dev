import { createStore } from 'vuex'

import jobsModule from './modules/jobs/index.js'

const store = createStore({
  modules: { jobs: jobsModule },
  state () {}
})

export default store
