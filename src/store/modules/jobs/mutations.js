export default {
	loadJobs (state, payload) {
		const { repository, jobs, section } = payload
		state.jobs[repository].jobs = {
			...state.jobs[repository].jobs,
			[section]: jobs
		}
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
