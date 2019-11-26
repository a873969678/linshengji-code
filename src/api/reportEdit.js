import fetch from '@/utils/fetch'
// import fetch from '@/utils/fetchLocal'
import cookie from 'js-cookie'
// var dmp = ''

// 创建数据源
export function CreateMatrix(params) {
  const dmp = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmp + '/marvel/CreateMatrix',
    method: 'POST',
    data: params
  })
}
// 同步
export function CopyDictionary(params) {
  const dmp = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmp + '/marvel/CopyDictionaryToSelectItemComment',
    method: 'POST',
    data: params
  })
}

// 同步
export function CopySelectItem(params) {
  const dmp = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmp + '/marvel/CopySelectItemCommentToDictionary',
    method: 'POST',
    data: params
  })
}

// 数据源列表
export function GetMatrix(params, matrixDev) {
  const dmp = cookie.get('bashUrl') + 'dmp-api'
  const url = matrixDev ? '/marvel/GetMatrix' : '/marvel/GetDeployedMatrix'
  return fetch({
    url: dmp + url,
    method: 'POST',
    data: params
  })
}

// 数据源列表(单个)
export function SynchronizeMatrix(params, matrixDev) {
  const dmp = cookie.get('bashUrl') + 'dmp-api'
  const url = '/marvel/SynchronizeMatrix'
  return fetch({
    url: dmp + url,
    method: 'POST',
    data: params
  })
}
// 数据源列表 投屏
export function GetDeployedMatrix(params) {
  const dmp = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmp + '/marvel/GetDeployedMatrix',
    method: 'POST',
    data: params
  })
}

// 保存数据源
export function SaveMatrix(params) {
  const dmp = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmp + '/marvel/SaveMatrix',
    method: 'POST',
    data: params
  })
}

// 申请查看
export function ApplyForMatrix(params) {
  const dmp = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmp + '/marvel/ApplyForMatrix',
    method: 'POST',
    data: params
  })
}

// 申请列表
export function GetApplyList(params) {
  const dmp = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmp + '/marvel/GetApplyList',
    method: 'POST',
    data: params
  })
}
// 审核
export function ReplyApply(params) {
  const dmp = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmp + '/marvel/ReplyApply',
    method: 'POST',
    data: params
  })
}

// 查看审核结果审核
export function GetReplyApplyList(params) {
  const dmp = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmp + '/marvel/GetReplyApplyList',
    method: 'POST',
    data: params
  })
}

// 设置配置
export function UpdatePersonalDirectionInfo(params) {
  const dmp = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmp + '/marvel/UpdatePersonalDirectionInfo',
    method: 'POST',
    data: params
  })
}

// 获取配置
export function GetPersonalDirectionInfo(params) {
  const dmp = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmp + '/marvel/GetPersonalDirectionInfo',
    method: 'POST',
    data: params
  })
}

