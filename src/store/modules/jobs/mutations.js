export default {
  loadJobs (state, payload) {
    const { repository, jobs } = payload
    state.jobs[repository].jobs = state.jobs[repository].jobs.concat(jobs)
  },

  setLastFetched (state, payload) {
    const { repository } = payload
    state.jobs[repository].lastFetched = new Date().getTime()
  },

  setRetrievedPages (state, payload) {
    const { repository, amount } = payload
    state.jobs[repository].retrievedPages = amount
  },

  setPaginatedJobs (state, payload) {
    state.paginatedJobs = payload.paginatedJobs
  },

  setTotalJobs (state, payload) {
    const { repository, totalJobs } = payload
    state.jobs[repository].totalJobs = totalJobs
  }
}