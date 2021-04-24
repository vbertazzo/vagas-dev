const api = {
	async fetchJobByNumber (repository, number) {
		const url = `/.netlify/functions/jobByNumber?repository=${repository}&jobNumber=${number}`

		const response = await fetch(url)

		if (!response.ok) {
			let message =
				'Ocorreu um erro ao carregar a vaga. Por favor, tente novamente em breve.'
			if (response.status === 404) {
				message =
					'Vaga não encontrada. Por favor, verifique se as informações estão corretas.'
			}
			throw new Error(message)
		}

		return await response.json()
	},

	async fetchJobs (repository, jobsPerPage, page) {
		const response = await fetch(
			`/.netlify/functions/jobs?repository=${repository}&perPage=${jobsPerPage}&page=${page}`
		)

		if (!response.ok) {
			throw new Error(
				'Ocorreu um erro ao carregar as vagas. Por favor, tente novamente em breve.'
			)
		}

		return await response.json()
	},

	async fetchTotalJobs (repository) {
		const response = await fetch(
			`/.netlify/functions/totalJobs?repository=${repository}`
		)

		if (!response.ok) {
			throw new Error(
				'Ocorreu um erro ao carregar as vagas. Por favor, tente novamente em breve.'
			)
		}

		return await response.json()
	}
}

export default api
