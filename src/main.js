import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import './index.css'

import BaseChip from './components/ui/BaseChip.vue'
import BasePagination from './components/ui/BasePagination.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.component('base-chip', BaseChip)
app.component('base-pagination', BasePagination)
app.mount('#app')
