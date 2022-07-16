const $ = require('meeko')
const logical = require('./lib/logical.js')
const math = require('./lib/math.js')
const stats = require('./lib/stats.js')
const excelObj = {
  ...logical,
  ...math,
  ...stats
}

module.exports = excelObj
