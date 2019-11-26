import { asyncRouterMap, constantRouterMap } from '@/router'
// import { getVendorModules } from '@/api/role'
import { fetchUserInfo, getUserRoutes } from '@/api/login'
import { Message } from 'element-ui'
import _ from 'lodash'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(modules, route) {
  // let mod = `module`
  // if (process.env.NODE_ENV === 'production') {
  //   mod = `prodModule`
  // }
  if (route.meta && route.path) {
    return modules.some(moduleItem => route.path === moduleItem)
  } else {
    return true
  }
}

/**
 * 最外层添加一层角色，不属于自己角色的整个菜单禁用
 * @param menuList
 */
function handleRoles(menuList, isSuperAdmin) {
  const menus = []
  let keyId = 0
  for (const role of menuList) {
    const defaultMenu = {
      path: role.roleId,
      redirect: 'noredirect',
      alwaysShow: true,
      meta: { title: '', icon: 'item' },
      children: [],
      isOwner: role.isOwner,
      isTop: true,
      keyId: keyId.toString()
    }
    keyId++
    defaultMenu.meta.title = role.roleName
    defaultMenu.children = reGetRoutes(role.menus, asyncRouterMap, isSuperAdmin || role.isOwner || false)
    menus.push(defaultMenu)
  }
  return menus
  /**
   * 递归筛选展示用菜单
   * @param menus 接口获取到的菜单，按照排序值排序
   * @param routes 本地路由表
   * @param isOwner 判断是否禁用
   * 根据接口获取的菜单找到对应的本地路由并返回
   */
  function reGetRoutes(menus, routes, isOwner) {
    if (!menus || !routes) return []
    const resMenus = []
    for (const m of menus) {
      // 找到菜单里面对应的路由
      for (const r of routes) {
        if (r.path === m.route) {
          const menu = Object.assign({ isOwner, keyId: keyId.toString() }, _.cloneDeep(r))
          keyId++
          if (m.childMenus) {
            menu.children = reGetRoutes(m.childMenus, r.children, isOwner)
          } else {
            menu.children = []
          }
          resMenus.push(menu)
        }
      }
    }
    return resMenus
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param modules
 */
function filterAsyncRouter(routes, modules) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(modules, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, modules)
      }
      res.push(tmp)
    }
  })

  return res
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    status: 'TO_GENERATE'
  },
  mutations: {
    SET_ROUTERS: (state, [routers, menuList]) => {
      state.addRouters = routers
      state.routers = menuList
      state.status = 'GENERATED'
    }
  },
  actions: {
    GenerateRoutes({ commit, rootState }) {
      return new Promise((resolve, reject) => {
        // if (process.env.NODE_ENV === 'dev') {
        //   commit('SET_ROUTERS', asyncRouterMap)
        // } else {
        console.log(rootState.user.isSuperAdmin)
        fetchUserInfo().then(res => {
          if (res.data.code === 200) {
            getUserRoutes().then(res => {
              if (!res.data.data) {
                // window.location.href = process.env.NODE_ENV === 'production' ? `https://portal.lexing360.com/#/login?from=${window.location.href}` : `https://portal-dev.lexing360.com/#/login?from=${window.location.href}`
              } else {
                const list = res.data.data.permRouters
                const menuList = handleRoles(res.data.data.roleMenus, rootState.user.isSuperAdmin)
                // console.log(menuList)
                const accessedRouters = filterAsyncRouter(asyncRouterMap, list)
                commit('SET_ROUTERS', [accessedRouters, menuList])
                // commit('SET_ROUTERS', asyncRouterMap)
                resolve()
              }
            })
          } else {
            Message.error('获取用户信息失败!请重新登录!')
            throw new Error('获取用户信息失败!')
          }
        }).catch(e => {
          throw new Error(e.message)
        })
        // }
      })
    }
  }
}

export default permission
