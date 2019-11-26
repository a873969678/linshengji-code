// import { login } from '@/api/login'
import { login } from '@/api/login'
import { getPcAdminUserRole } from '@/api/user'
import cookie from 'js-cookie'
import storage from 'store'
const user = {
  state: {
    roles: [],
    name: ''
  },

  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    Login: ({ commit }, userInfo) => {
      return new Promise((resolve, reject) => {
        const phone = userInfo.phone.trim()
        login(phone, userInfo.password).then(res => {
          if (res.status === 200) {
            const user = res.data.data
            cookie.set('login_token', user.login_token)
            storage.set('userInfo', user.vendor)
            commit('SET_AVATAR', user.vendor.avatar)
            commit('SET_NAME', user.vendor.nickname || user.vendor.name)
            resolve()
          } else {
            reject(res)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 获取用户信息
    GetUserInfo: ({ commit }) => {
      return new Promise((resolve, reject) => {
        const user = storage.get('userInfo')
        if (user) {
          commit('SET_AVATAR', user.avatar)
          commit('SET_NAME', user.nickname || user.name)
          resolve()
        } else {
          reject()
        }
      })
    },
    // 获取用户权限
    GetUserRole: ({ commit }) => {
      return new Promise((resolve, reject) => {
        getPcAdminUserRole().then(res => {
          if (res.status === 200) {
            const roles = res.data.data.roleName
            const roleArr = roles.indexOf(',') ? roles.split(',') : [roles]
            commit('SET_NAME', res.data.data.nickname)
            commit('SET_ROLES', roleArr)
            resolve({ data: roleArr })
          } else if (res.status === 403) {
            commit('SET_ROLES', ['NO_AUTH'])
            resolve({ data: ['NO_AUTH'] })
          } else {
            reject(res)
          }
        }).catch(err => {
          reject(err)
        })
        // commit('SET_ROLES', 'ADMIN')
        // resolve({ data: ['ADMIN'] })
      })
    },
    // 前端 登出
    LogOut: ({ commit }) => {
      return new Promise((resolve) => {
        // 清除服务器登录态
        // logOut().then(() => {
        //   commit('SET_NAME', '')
        //   commit('SET_AVATAR', '')
        //   cookie.remove('login_token')
        //   storage.remove('userInfo')
        // })
        commit('SET_NAME', '')
        commit('SET_AVATAR', '')
        cookie.remove('login_token')
        storage.remove('userInfo')
        resolve()
      })
    }
  }
}

export default user
