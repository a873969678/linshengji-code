import fetch from '@/utils/fetch'
// import fetch from '@/utils/fetchLocal'
// const dmpApi = ''
import cookie from 'js-cookie'

// 公用报表自动化查询（统一）
export function getPublicTableReport(params) {
  const dmpApi = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmpApi + '/common/UpdateDbConfigData',
    method: 'POST',
    data: params
  })
}
// 查询报表
export function getQueryEditableReportList() {
  const dmpApi = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmpApi + '/report/QueryEditableReportList',
    method: 'GET'
  })
}
