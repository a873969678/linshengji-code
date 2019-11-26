
// import fetch from '@/utils/fetchLocal'
import fetch from '@/utils/fetch'
import cookie from 'js-cookie'

// const dmpApi = ''

export function cdnAjax(url) {
  return new Promise((resolve, reject) => {
    const root = process.env.NODE_ENV === 'production' ? 'release' : 'dev'
    const urlHttp = `http://q13e3tezd.bkt.clouddn.com/${root}-${url}.json`
    let xmlhttp
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest()
    }
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        resolve(xmlhttp.responseText)
      }
    }
    xmlhttp.open('GET', urlHttp, true)
    xmlhttp.send()
  })
}

export function getVer(params) {
  const dmp = cookie.get('bashUrl') + 'dmp-api'
  return fetch({
    url: dmp + '/common/UpdateDbConfigData',
    method: 'POST',
    data: params
  })
}

