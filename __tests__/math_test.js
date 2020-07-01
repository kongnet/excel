const err = require('../lib/base.js').errorObj
const math = require('../lib/math.js')
/*
console.log(BASE(7, 2), BASE(100, 16), BASE(15, 2, 10))
console.log(
  CEILINGMATH(6.7),
  CEILINGMATH(-8.1, 2),
  CEILINGMATH(-5.5, 2, 1) //网页例子有误
)
console.log(CEILINGMATH(2.11, 0.2), CEILINGMATH(2.21, 0.2))

console.log(COMBIN(8, 2))

console.log(COMBINA(10, 3))
console.log(COMBINA(4, 3))
console.log(COS(1.047))
console.log(COS((60 * Math.PI) / 180))
console.log(COSH(4))
console.log(COT(30))
console.log(COTH(2))
console.log(CSC(15))
console.log(CSCH(1.5))
console.log(DECIMAL('zap', 36))
console.log(DEGREES(Math.PI))
console.log(EVEN(1.5), EVEN(3), EVEN(2), EVEN(-1), EVEN(-1, 2, -1), EVEN(-0.5))
*/
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
