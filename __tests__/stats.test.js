const assert = require('assert')
const { stat } = require('fs')
const assertLog = function () {
  global.assertCount++
  return assert.strictEqual(...arguments)
}
const base = require('../lib/base.js')
const err = base.errorObj
const stats = require('../lib/stats.js')

describe('统计函数测试', () => {
  it('stats FREQUENCY', async () => {
    const aFREQUENCY = [
      300,
      290,
      517,
      850,
      484,
      856,
      784,
      666,
      865,
      445,
      243,
      1000
    ]
    const segFREQUENCY = [500, 300, 1000]
    assertLog(stats.FREQUENCY(aFREQUENCY, segFREQUENCY)['(500,1000]'], 7)
  })
})
