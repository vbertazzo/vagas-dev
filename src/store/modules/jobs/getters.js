export default {
  jobs (state) {
    return state.jobs
  },
  shouldUpdate (state) {
    const INTERVAL_IN_SECONDS = 300
    const lastFetchTime = state.lastFetch
    if (!lastFetchTime) {
      return true
    }

    const currentTime = new Date().getTime()

    return (currentTime - lastFetchTime) / 1000 > INTERVAL_IN_SECONDS
  }
}
