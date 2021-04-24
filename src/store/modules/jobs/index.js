import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
	namespaced: true,
	state () {
		return {
			jobs: {
				AndroidDevBr: {
					jobs: {},
					totalJobs: null
				},
				'Backend-BR': {
					jobs: {},
					totalJobs: null
				},
				CocoaHeadsBrasil: {
					jobs: {},
					totalJobs: null
				},
				DotNetDevBR: {
					jobs: {},
					totalJobs: null
				},
				FrontendBR: {
					jobs: {},
					totalJobs: null
				},
				FlutterBR: {
					jobs: {},
					totalJobs: null
				},
				Gommunity: {
					jobs: {},
					totalJobs: null
				},
				PHPDevBR: {
					jobs: {},
					totalJobs: null
				},
				'QA-Brasil': {
					jobs: {},
					totalJobs: null
				},
				'React-Brasil': {
					jobs: {},
					totalJobs: null
				},
				UXBrasil: {
					jobs: {},
					totalJobs: null
				},
				'Vuejs-BR': {
					jobs: {},
					totalJobs: null
				}
			},
			paginatedJobs: []
		}
	},
	actions,
	getters,
	mutations
}
