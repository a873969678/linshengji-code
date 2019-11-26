const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"dev"',
  API_URL: '"http://106.52.178.166:9999/"',
  // API_URL: '"http://192.168.0.3/"',
  API_LOCAL: '"http://192.168.0.173:8888/"'
})
