// import fetch from '@/utils/fetchLocal'
import fetch from '@/utils/fetch'
import axios from 'axios'
import cookie from 'js-cookie'
import Qs from 'qs'

export function postRouteChange(data) {
  return axios.post('/scg/urm/api/stat', data, {
    baseURL: process.env.API_URL,
    timeout: 60000,
    headers: {
      'Authorization': cookie.get('login_token')
    }
  })
}

export function login(phone, password) {
  return fetch({
    url: 'admin-api/v1/vendors/auth-by-password?device_id=' + new Date().getTime() + '&device_type=' + window.navigator.platform + '&channel=pc',
    method: 'POST',
    params: {
      phone: phone,
      password: password
    }
  })
}

// 登出，清除后端登录态
export function logOut() {
  return fetch({
    url: `scg/urm/api/logout`,
    withCredentials: true,
    method: 'POST'
  })
}

// 检测后台登录态，返回jwt
export function getJwtWhenNoCache() {
  return fetch({
    url: `scg/urm/api/login_token?channel=data`,
    withCredentials: true,
    method: 'GET'
  })
}

// 获取用户信息和模块
export function fetchUserInfo() {
  return fetch({
    url: `scg/urm/api/users/mine?withMoudle=true`,
    withCredentials: true,
    method: 'GET'
  })
}

// 根据用户角色获取用户可见菜单
export function getUserRoutes() {
  return fetch({
    url: `scg/urm/api/resource`,
    // url: `scg/urm/api/permission`,
    method: 'GET',
    paramsSerializer: function(params) {
      return Qs.stringify(params, { indices: false })
    }
  })
}
