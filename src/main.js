import { createApp } from 'vue'
import { VueShowdown } from 'vue-showdown'
import Toast, { POSITION } from 'vue-toastification'

import App from './App.vue'
import router from './router'
import store from './store/index'

import 'animate.css'
import './index.css'
import 'vue-toastification/dist/index.css'

import BaseChip from './components/ui/BaseChip.vue'
import BaseFAB from './components/ui/BaseFAB.vue'
import BaseDivider from './components/ui/BaseDivider.vue'
import BaseButton from './components/ui/BaseButton.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(Toast, { position: POSITION.BOTTOM_CENTER })
app.directive('focus', {
  mounted (el) {
    el.focus()
  }
})
app.component('vue-showdown', VueShowdown)
app.component('base-chip', BaseChip)
app.component('base-fab', BaseFAB)
app.component('base-divider', BaseDivider)
app.component('base-button', BaseButton)
app.mount('#app')
