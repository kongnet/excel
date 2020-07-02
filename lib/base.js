const $ = require('meeko')
global.$ = $
const baseObj = {}
let constVar = {
  '2^27': 2 ** 27
}
let errorObj = {
  nil: '#NULL!', // 为空
  div0: '#DIV/0!', // 被0除
  value: '#VALUE!', // 当使用错误的参数或运算对象类型时，或者当公式自动更正功能不能更正公式时
  ref: '#REF!', // 引用无效
  name: '#NAME?', // 名称写错了，也有可能是引号、逗号错误造成
  num: '#NUM!', // 不是整数
  na: '#N/A', // 当在函数或bai公式中没有可用数值对时，将产生错误值#N/A
  error: '#ERROR!',
  data: '#GETTING_DATA'
}
baseObj.nil = function () {
  throw new Error(errorObj.nil)
}

baseObj.toBool = x => x ? 'TRUE' : 'FALSE'

baseObj.errorObj = errorObj
baseObj.errorList = Object.values(errorObj)
baseObj.constVar = constVar
module.exports = baseObj
