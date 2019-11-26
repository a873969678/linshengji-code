import axios from 'axios'
import { Message } from 'element-ui'
// import store from '../store'
// import router from '@/router/index'
import cookie from 'js-cookie'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://106.52.178.166:9999/', // api 的 base_url
  timeout: 60000, // 请求超时时间
  headers: {},
  validateStatus: function(status) {
    return status >= 200 && status < 600 // default
  }
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (cookie.get('login_token')) {
      config.headers.Authorization = cookie.get('login_token')
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 401) {
      // localStorage.removeItem('login_token')
      // eventBus.$emit('401_error', res.data.message)
      Message.error(response.data.message || '您还未登录，请先登录！')
      cookie.remove('login_token')
      // router.push('/login')
      // window.location.href = process.env.NODE_ENV === 'production' ? `https://portal.lexing360.com/#/login?from=${window.location.href}` : `https://urm-dev.lexing360.com/#/login?from=${window.location.href}`
    }
    if (response.status !== 200 && response.status !== 401) {
      Message.error(response.data.message)
      return Promise.reject(response)
    }
    return response
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
