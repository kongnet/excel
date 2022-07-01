/**
 * @namespace STATS
 */

const base = require('./base.js')
let statsObj = {}

/**
 * [参考资料](https://jingyan.baidu.com/article/1612d500e1ee4de20f1eee53.html)
 * @desc FREQUENCY 函数计算值在值范围内出现的频率，然后返回垂直数字数组。 例如，使用函数 FREQUENCY 可以在分数区域内计算测验分数的个数。 由于 FREQUENCY 返回一个数组，所以它必须以数组公式的形式输入。
 * @param {Array} a 数据
 * @param {Array} b 分割点数组
 * @example
 * 参看测试用例
 * @returns {Object}
 * @memberof STATS#
 */
const FREQUENCY = (a, segArray) => {
  const segArr = segArray.sort((a, b) => a - b)
  const segMap = []
  let i = 0
  for (i = 0; i < segArr.length; i++) {
    segMap.push('(' + (segArr[i - 1] || '-∞') + ',' + segArr[i] + ']')
  }
  segMap.push('(' + segArr[i - 1] + ',+∞]')
  a.forEach(item => {
    const idx = segArr.findIndex(x => item <= x)
    segMap.push(segMap[idx < 0 ? i : idx])
  })
  const segObj = segMap.count()
  for (const m in segObj) {
    segObj[m]-- // 全部减去1
  }
  return segObj
}

statsObj = {
  FREQUENCY
}

module.exports = statsObj
