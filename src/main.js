import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

Vue.config.productionTip = false
Vue.prototype.GLOBAL = {
  env: process.env.NODE_ENV
}
export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
