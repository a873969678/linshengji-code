import fetch from '@/utils/fetch'
// import fetch from '@/utils/fetchLocal'

export function getPages(params) {
  return fetch({
    url: '/dmp-api/v1/page/page',
    params
  })
}

export function addPage(params, data) {
  return fetch({
    url: '/dmp-api/v1/page',
    method: 'POST',
    params,
    data
  })
}

export function updatePage(data) {
  return fetch({
    url: '/dmp-api/v1/page',
    method: 'PUT',
    data
  })
}

export function deletePage(id) {
  return fetch({
    url: `/dmp-api/v1/page/${id}`,
    method: 'DELETE'
  })
}

export function getItemPage(itemId) {
  return fetch({
    url: `/dmp-api/v1/page/list/${itemId}`
  })
}
