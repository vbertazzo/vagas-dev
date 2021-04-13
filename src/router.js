import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/jobs/JobList.vue')
    },
    {
      path: '/:repository/:jobNumber',
      component: () => import('./views/jobs/JobDetails.vue'),
      props: true
    }
  ],
  scrollBehavior (_, _2, savedPosition) {
    const resetPosition = { left: 0, top: 0 }

    return savedPosition ? savedPosition : resetPosition
  }
})

export default router
