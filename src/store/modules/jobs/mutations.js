export default {
  loadJobs (state, payload) {
    const { repository, jobs } = payload
    state.jobs[repository] = jobs
  },
  setFetchTime (state) {
    state.lastFetch = new Date().getTime()
  }
}
