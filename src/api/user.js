// import fetch from '@/utils/fetchLocal'
import fetch from '@/utils/fetch'

export function getPcAdminUser(params) {
  return fetch({
    url: 'dmp-api/v1/vendor/list',
    params
  })
}

export function getPcAdminUserRole() {
  return fetch({
    url: 'dmp-api/v1/vendor/menu'
  })
}

export function updatePcAdminUserRole(data) {
  return fetch({
    url: 'dmp-api/v1/vendor/saveVendorRoleByVid',
    method: 'POST',
    data
  })
}

export function addPcAdminUser(data) {
  return fetch({
    url: 'dmp-api/v1/vendor/saveVendorRoleByPhone',
    method: 'POST',
    data
  })
}

export function getMiniAppUser(params) {
  return fetch({
    url: 'dmp-api/v1/user/page',
    params
  })
}

export function updateMiniAppUserRole(data) {
  return fetch({
    url: 'dmp-api/v1/user/updateRole',
    method: 'PUT',
    data
  })
}

export function passMiniAppUser(data) {
  return fetch({
    url: 'dmp-api/v1/user/pass/v2',
    method: 'PUT',
    data
  })
}

export function rejectMiniAppUser(data) {
  return fetch({
    url: 'dmp-api/v1/user/reject',
    method: 'PUT',
    data
  })
}

export function removeUser(userId) {
  return fetch({
    // baseURL: 'http://192.168.0.97:8888',
    url: 'dmp-api/v1/user/cancelAccess/' + userId,
    method: 'POST'
  })
}

export function syncTag() {
  return fetch({
    url: `dmp-api/v1/department/sync`,
    method: 'GET'
  })
}

// 新增部门成员
export function addMember(data) {
  return fetch({
    url: 'admin-api/v1/vendors/register',
    method: 'post',
    data: data
  })
}

// 更新成员
export function updateMember(data) {
  return fetch({
    url: 'admin-api/v1/vendors',
    method: 'put',
    data: data
  })
}

// 获取所有角色
export function getAllRole(data) {
  return fetch({
    url: 'admin-api/v1/auth/role',
    method: 'get',
    params: data
  })
}

// 用户绑定角色
export function vendorBindRole(data) {
  return fetch({
    url: 'admin-api/v1/auth/roles/vendors',
    method: 'post',
    data: data
  })
}

// 获取查询部门
export function getOrganization(data) {
  return fetch({
    url: 'admin-api/v1/department',
    method: 'get',
    params: data
  })
}

// 获取所有成员
export function getAllPeople(data) {
  return fetch({
    url: 'admin-api/v1/vendors/page',
    method: 'post',
    data: data
  })
}
