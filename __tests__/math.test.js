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

console.log(EXP(1))
console.log(FACT(5))
console.log(FACTDOUBLE(6))
console.log(FACTDOUBLE(7))

console.log(FLOOR(3.7, 2))
console.log(FLOOR(-2.5, -2))
console.log(FLOOR(1.58, 0.1))
console.log(FLOOR(0.234, 0.01))
console.log(FLOOR(2.5, -2)) //符号相反throw出错

console.log(FLOORMATH(24.3, 5))
console.log(FLOORMATH(6.7))
console.log(FLOORMATH(-8.1, 2))
console.log(FLOORMATH(-5.5, 2, -1))

console.log(FLOORPRECISE(-3.2, -1))
console.log(FLOORPRECISE(3.2, 1))
console.log(FLOORPRECISE(-3.2, 1))
console.log(FLOORPRECISE(3.2, -1))
console.log(FLOORPRECISE(3.2))

console.log(GCD(24, 0, 0, 0, 4))
console.log(GCD(5, 2))
console.log(GCD(7, 1))
console.log(GCD(5, 0))

console.log(INT(8.9))
console.log(INT(-8.9))
console.log(LCM(5, 2))
console.log(LCM(24, 36, 4, 2, 3))

console.log(LN(2.7182818))
console.log(LN(86))
console.log(LN(EXP(3)))

console.log(LOG(10))
console.log(LOG(8, 2))
console.log(LOG(86, 2.7182818))

console.log(LOG10(86))
console.log(LOG10(1e5))
console.log(LOG10(10))

console.log(
  MDETERM([
    [1, 3, 8, 5],
    [1, 3, 6, 1],
    [1, 1, 1, 0],
    [7, 3, 10, 0]
  ])
)
console.log(
  MINVERSE([
    [4, -1],
    [2, 0]
  ])
)

console.log(
  MMULT(
    [
      [1, 3],
      [7, 2]
    ],
    [
      [2, 0],
      [0, 2]
    ]
  )
)

console.log(MOD(3, 2))
console.log(MOD(-3, 2))
console.log(MOD(3, -2))
console.log(MOD(-3, -2))

console.log(MROUND(10, 3))
console.log(MROUND(-10, -3))
console.log(MROUND(1.3, 0.2))
console.log(MROUND(5, -2)) //throw错误

console.log(MULTINOMIAL(2, 3, 4))
console.log(MULTINOMIAL(4, 3, 2))

console.log(MUNIT(3))

console.log(ODD(1.5))
console.log(ODD(3))
console.log(ODD(2))
console.log(ODD(-1))
console.log(ODD(-2))
console.log(ODD(-3))

console.log(PI())

console.log(POWER(5, 2))
console.log(POWER(98.6, 3.2))
console.log(POWER(4, 5 / 4))

console.log(PRODUCT(5, 15, 30))

console.log(QUOTIENT(5, 2))
console.log(QUOTIENT(4.5, 3.1))
console.log(QUOTIENT(-10, 3))

console.log(RADIANS(270))

console.log(RAND())

console.log(RANDBETWEEN(-1, 1))
console.log(RANDBETWEEN(-1, 1))
console.log(RANDBETWEEN(-1, 1))
console.log(RANDBETWEEN(-1, 1))
console.log(RANDBETWEEN(-1, 1))
console.log(RANDBETWEEN(-1, 1))
console.log(RANDBETWEEN(-1, 1))
console.log(RANDBETWEEN(-1, 1))

console.log(ROMAN(2345))

//round函数不是很确定是否正确需要交叉检验
console.log(ROUND(2.15, 1))
console.log(ROUND(2.149, 1))
console.log(ROUND(-1.475, 2))
console.log(ROUND(21.5, -1))
console.log(ROUND(626.3, -3))
console.log(ROUND(1.98, -1))
console.log(ROUND(-50.55, -2))

console.log(ROUNDDOWN(3.2, 0))
console.log(ROUNDDOWN(76.9, 0))
console.log(ROUNDDOWN(3.14159, 3))
console.log(ROUNDDOWN(-3.14159, 1))
console.log(ROUNDDOWN(31415.92654, -2))

console.log(ROUNDUP(3.2, 0))
console.log(ROUNDUP(76.9, 0))
console.log(ROUNDUP(3.14159, 3))
console.log(ROUNDUP(-3.14159, 1))
console.log(ROUNDUP(31415.92654, -2))

console.log(SEC(45))
console.log(SEC(30))

console.log(SECH(45))
console.log(SECH(30))

console.log(SERIESSUM(0.785398163, 0, 2, [1, -0.5, 0.041666667, -0.001388889]))

console.log(SIGN(1))
console.log(SIGN(0))
console.log(SIGN(-1))

console.log(SIN(PI()))
console.log(SIN(PI() / 2))
console.log(SIN((PI() / 180) * 30))
console.log(SIN(RADIANS(30)))

console.log(2.868 * SINH(0.0342 * 1.03))

console.log(SQRT(16))
console.log(SQRT(-16)) //throw #NUM！

console.log(SQRTPI(1))
console.log(SQRTPI(2))

console.log(SUM(1, 2, 3, 4))

console.log(SUMPRODUCT([1, 2], [3, 4], [5, 6]))
console.log(SUMSQ(3, 4))
console.log(SUMX2MY2([2, 3, 9, 1, 8, 7, 5], [6, 5, 11, 7, 5, 4, 4]))
console.log(SUMX2PY2([2, 3, 9, 1, 8, 7, 5], [6, 5, 11, 7, 5, 4, 4]))
console.log(SUMXMY2([2, 3, 9, 1, 8, 7, 5], [6, 5, 11, 7, 5, 4, 4]))

console.log(TAN(0.785))
console.log(TAN((45 * PI()) / 180))
console.log(TAN(RADIANS(45)))

console.log(TANH(-2))
console.log(TANH(0))
console.log(TANH(0.5))

console.log(TRUNC(8.9, 0))
console.log(TRUNC(-8.9, -2.1))
console.log(TRUNC(0.45, 0))
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
