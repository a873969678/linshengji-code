import Vue from 'vue'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.GLOBAL = {
  env: process.env.NODE_ENV
}
export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
