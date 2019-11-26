// import fetch from '@/utils/fetchLocal'
import fetch from '@/utils/fetch'
import cookie from 'js-cookie'
import { Message } from 'element-ui'
// const dmpApi = ''

// 看板查询接口（统一）
export function getEditableReport(params) {
  const dmpApi = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmpApi + '/report/RequestEditableReport',
    method: 'POST',
    data: params
  })
}

export function getEditableReportMBI(params) {
  const dmpApi = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmpApi + '/marvel/ExtractMatrix',
    method: 'POST',
    data: params
  })
}
// 申请导出接口
export function verifyExportReq(params) {
  const dmpApi = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmpApi + '/marvel/VerifyExportReq',
    method: 'POST',
    data: params
  })
}

// 拉取kpi配置记录
export function getKpiRecordList(params) {
  const dmpApi = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmpApi + '/kpi/GetKpiRecordList',
    method: 'POST',
    data: params
  })
}

export function getEditableReportExport(searchData) {
  const dmpApi = cookie.get('bashUrl') + 'dmp-api'
  const data = Object.assign({}, searchData)
  let params = ''
  for (var key in data) {
    if (data[key] || data[key] === 0) {
      params += (params ? '&' : '?') + key + '=' + data[key]
    }
  }
  params += (params ? '&' : '?') + 'Authorization=' + cookie.get('login_token')
  const url = dmpApi + '/report/RequestBuffetReportCsv' + params
  window.open(url)
}

export function getEditableReportExportMBI(searchData) {
  const dmpApi = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmpApi + '/marvel/ExtractMatrixWithCsv',
    method: 'POST',
    data: searchData
  })
}

// 获取自助取数报表
export function getEditableReportExportAuto(searchData) {
  const dmpApi = cookie.get('bashUrl') + 'dmp-api'
  const data = Object.assign({}, searchData)
  let params = ''
  for (var key in data) {
    if (data[key] || data[key] === 0) {
      params += (params ? '&' : '?') + key + '=' + data[key]
    }
  }
  params += (params ? '&' : '?') + 'Authorization=' + cookie.get('login_token')
  const url = dmpApi + '/report/RequestBuffetReportCsv' + params
  window.open(url)
}

export function getFullDay(i, type, timestamps) {
  // 根据需要传递参数，i为距今相差几天，type是格式化类型,timestamps初始化时间戳
  var date = ''
  if (timestamps) {
    date = new Date(timestamps)
  } else {
    date = new Date()
  }
  const timestamp = date.getTime()
  // 获取i天前的日期
  const newDate = new Date(timestamp - i * 24 * 3600 * 1000)
  var year = newDate.getFullYear()
  // 月+1是因为js中月份是按0开始的
  var month = newDate.getMonth() + 1
  var day = newDate.getDate()
  if (day < 10) { // 如果日小于10，前面拼接0
    day = '0' + day
  }
  if (month < 10) { // 如果月小于10，前面拼接0
    month = '0' + month
  }
  if (type === 1) {
    return month + '.' + day
  } else if (type === 3) {
    return year + '-' + month + '-' + day
  } else {
    return year + '/' + month + '/' + day
  }
}

export function getMonthStartAndEnd(AddMonthCount = 0, type, timestamps) {
  // 获取当月1号到月尾
  const startStop = []
  let currentDate = ''
  // 获取当前时间
  if (timestamps) {
    const day = new Date(timestamps).getDate()
    let count = 3
    if (day < 5) {
      count = 0
    }
    currentDate = new Date(timestamps - 24 * 60 * 60 * 1000 * count)
  } else {
    currentDate = new Date()
  }
  let month = currentDate.getMonth() + AddMonthCount
  if (month < 0) {
    const n = parseInt((-month) / 12)
    month += n * 12
    currentDate.setFullYear(currentDate.getFullYear() - n)
  }
  currentDate = new Date(currentDate.setMonth(month))
  // 获得当前月份0-11
  const currentMonth = currentDate.getMonth()
  // 获得当前年份4位年
  const currentYear = currentDate.getFullYear()
  // 获得上一个月的第一天
  const currentMonthFirstDay = new Date(currentYear, currentMonth, 1)
  // 获得上一月的最后一天
  const currentMonthLastDay = new Date(currentYear, currentMonth + 1, 0)
  // 添加至数组
  startStop.push(formatDate(currentMonthFirstDay, type))
  startStop.push(formatDate(currentMonthLastDay, type))
  // 返回
  return startStop
}

export function formatDate(date, type) {
  const data = date
  const y = data.getFullYear()
  const m = data.getMonth() + 1 < 10 ? '0' + parseInt(data.getMonth() + 1) : data.getMonth() + 1
  const d = data.getDate() < 10 ? '0' + data.getDate() : data.getDate()
  if (type === 1) {
    return m + '.' + d
  } else if (type === 2) {
    return y + '/' + m
  } else if (type === 3) {
    return y + '-' + m + '-' + d
  } else {
    return y + '/' + m + '/' + d
  }
}

export function getDateType(timestamps) {
  // 或者当月有几天与当前是哪一天，用于计算预计完成率
  var date = ''
  if (timestamps) {
    date = new Date(timestamps)
  } else {
    date = new Date()
  }
  date.setDate(date.getDate())
  var day = date.getDate() // 当前几号
  let dateFull = 0
  if (date.getDate() < 5) {
    dateFull = new Date(timestamps)
  } else {
    dateFull = new Date(timestamps - 6 * 1000)
  }
  var curMonth = dateFull.getMonth()
  dateFull.setMonth(curMonth + 1)
  dateFull.setDate('0')
  return dateFull.getDate() / day
}

export function exportTable(selector, name, type) {
  // 导出文件：对应的表格id,导出文件名称，文件格式（'.xls','.csv'）
  if (document.querySelectorAll(selector).length === 0) {
    Message.warning('Selector "' + selector + '" not exists!')
    return false
  }
  exportCsv(getTableData(selector), name, type)
}

export function sumCountPage(dataList, name, noCountName) {
  // 合计方法，我觉得我这个方法比elementui 提供写的好
  // dataList 合并的数组  name 变成合并的字段 noCountName 除了中文外不合并的字段
  // 计算汇总，当页汇总
  let noCountNameList = []
  if (noCountName) {
    noCountNameList = noCountName
  }
  const data = dataList
  const arr = {}
  if (data.length === 0) {
    return false
  }
  data.forEach(element => {
    for (const item in element) {
      arr[item] = 0
    }
  })
  data.forEach(element => {
    for (const item in element) {
      arr[item] += Number(element[item])
    }
  })
  for (const key in arr) {
    if (isNaN(arr[key]) || noCountNameList.includes(key)) {
      arr[key] = '--'
    }
  }
  arr[name] = '合计'
  return arr
}
function exportCsv(data, name, type) {
  // “\ufeff” BOM头
  const uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(data)
  const downloadLink = document.createElement('a')
  downloadLink.href = uri
  downloadLink.download = (name + type) || 'temp' + type
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}

function getTableData(selector) {
  let data = ''
  document.querySelectorAll(selector + ' tr').forEach(function(t) {
    const tmp = []
    t.querySelectorAll('th,td').forEach(function(e) {
      tmp.push(e.innerText.replace('\n', '')) // 单元格里含有多个html元素可能会获取到换行符
    })
    data += tmp.join(',') + '\n'
  })
  return data
}

export function formatMoney(str) {
  let first = ''
  if (str < 0) {
    first = '-'
  }
  str = Math.abs(str) + ''
  let newStr = ''
  let count = 0

  if (str.indexOf('.') === -1) {
    for (let i = str.length - 1; i >= 0; i--) {
      if (count % 3 === 0 && count !== 0) {
        newStr = str.charAt(i) + ',' + newStr
      } else {
        newStr = str.charAt(i) + newStr
      }
      count++
    }
    str = newStr
  } else {
    for (let i = str.indexOf('.') - 1; i >= 0; i--) {
      if (count % 3 === 0 && count !== 0) {
        newStr = str.charAt(i) + ',' + newStr
      } else {
        newStr = str.charAt(i) + newStr // 逐个字符相接起来
      }
      count++
    }
    str = newStr + (str + '00').substr((str + '00').indexOf('.'), 3)
  }
  return first + str
}

