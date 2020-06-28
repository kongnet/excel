const err = require('../lib/base.js').errorObj
const math = require('../lib/math.js')

describe('数学函数测试', () => {
  test('math abs', async () => {
    expect(() => {
      math.ABS()
    }).toThrowError(new Error(err.nil))
    expect(math.ABS(-1)).toStrictEqual(1)
    expect(math.ABS(1)).toStrictEqual(1)
  })
  test('math asin', async () => {
    expect(() => {
      math.ASIN()
    }).toThrowError(new Error(err.nil))
    expect(
      (() => {
        let r = math.ASIN(-1)
        return r
      })()
    ).toStrictEqual(-1.5707963267948966)
  })
})
