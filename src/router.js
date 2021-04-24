import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/vagas/FrontendBR?page=1',
			component: () => import('./views/jobs/JobList.vue')
		},
		{
			path: '/vagas/:repository',
			component: () => import('./views/jobs/JobList.vue'),
			props: route => ({ page: parseInt(route.query.page) || 1 })
		},
		{
			path: '/:repository/:jobNumber',
			component: () => import('./views/jobs/JobDetails.vue'),
			props: true
		},
		{ path: '/:notFound(.*)', component: () => import('./views/NotFound.vue') }
	],
	scrollBehavior (_, _2, savedPosition) {
		const resetPosition = { left: 0, top: 0 }

		return savedPosition ? savedPosition : resetPosition
	}
})

export default router
