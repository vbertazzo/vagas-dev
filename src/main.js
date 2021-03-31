import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import './index.css'

import BaseChip from './components/ui/BaseChip.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.component('base-chip', BaseChip)
app.mount('#app')
