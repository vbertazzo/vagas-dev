export default {
  async loadJobs (context, payload) {
    if (!context.getters.shouldUpdate) {
      return
    }

    const { repository, perPage, page } = payload

    const response = await fetch(
      `.netlify/functions/jobs?repository=${repository}&perPage=${perPage}&page=${page}`
    )

    if (!response.ok) {
      console.log('Failed to fetch')
      return
    }

    const responseData = await response.json()

    context.commit('loadJobs', { repository, jobs: responseData })
  }
}
