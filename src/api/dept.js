import fetch from '@/utils/fetch'

export function getDeptList(data) {
  return fetch({
    url: '/admin-api/v1/department',
    method: 'get',
    params: data
  })
}

// 查询部门接口
export function department() {
  return fetch({
    url: '/v1/dept/getShowList'
  })
}
