import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import 'animate.css'
import './index.css'

import BaseChip from './components/ui/BaseChip.vue'
import BasePagination from './components/ui/BasePagination.vue'
import BaseFAB from './components/ui/BaseFAB.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.component('base-chip', BaseChip)
app.component('base-pagination', BasePagination)
app.component('base-fab', BaseFAB)
app.mount('#app')
