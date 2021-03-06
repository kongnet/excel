/**
 * @namespace MATH
 */

const base = require('./base.js')
let mathObj = {}

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/abs-%e5%87%bd%e6%95%b0-3420200f-5628-4e8c-99da-c99d7c87713c?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60072&ui=zh-cn&rs=zh-cn&ad=cn)
 * @desc 返回数字的绝对值。 一个数字的绝对值是该数字不带其符号的形式
 * @param {Number} n
 * @example
 * math.abs(-1)
 * => 1
 * @returns {Number}
 * @memberof MATH#
 */

const ABS = (n = base.nil()) => Math.abs(n)
const ACOS = (n = base.nil()) => Math.acos(n)
const ACOSH = (n = base.nil()) => Math.acosh(n)
const ACOT = (n = base.nil()) => Math.atan(1 / n) // or Math.PI / 2 - Math.atan(n)
const ACOTH = (n = base.nil()) => Math.log((n + 1) / (n - 1)) * 0.5
// AGGREGATE
const ARABIC = s => {
  let sum = 0
  s.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function (i) {
    sum += {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }[i]
  })
  return sum
}
const ASIN = (n = base.nil()) => Math.asin(n)
const ASINH = (n = base.nil()) => Math.log(n + Math.sqrt(n * n + 1))
const ATAN = (n = base.nil()) => Math.atan(n)
const ATAN2 = (x = base.nil(), y = base.nil()) => Math.atan2(x, y)
const ATANH = (n = base.nil()) => Math.log((1 + n) / (1 - n)) * 0.5

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/base-%e5%87%bd%e6%95%b0-2ef61411-aee9-4f29-a811-1c42456c6342?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60619&ui=zh-cn&rs=zh-cn&ad=cn)
 * @desc 将数字转换为具备给定基数的文本表示。
 * @param {Number} num
 * @param {Number} radix  [2,36]
 * @param {Number} minLen [0,255]
 * @example
 * math.BASE(15, 2, 10)
 * => 0000001111
 * @returns {String}
 * @memberof MATH#
 */

const BASE = function (num = base.nil(), radix = base.nil(), minLen = 0) {
  if (num < 0 || radix < 2 || radix > 36 || minLen < 0 || minLen > 255) {
    throw new Error(base.errorObj.num)
  }
  return num.toString(radix).fillStr('0', minLen, -1)
}

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/ceiling-math-%e5%87%bd%e6%95%b0-80f95d2f-b499-4eee-9f16-f795a8e306c8?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60639&ui=zh-cn&rs=zh-cn&ad=cn)
 * @desc 将数字向上舍入为最接近的整数或最接近的指定基数的倍数。
 * @param {Number} num
 * @param {Number} significance
 * @param {Number} mode
 * @example
 * math.CEILINGMATH(6.7)
 * => 7
 * @returns {Number}
 * @memberof MATH#
 */

const CEILINGMATH = function (
  num = base.nil(),
  significance = 1,
  mode = 0 //原离
) {
  if (significance === 0) {
    return 0
  }
  return Math[mode ? 'floor' : 'ceil'](num / significance) * significance
}

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/combin-%e5%87%bd%e6%95%b0-12a3f276-0a21-423a-8de6-06990aaf638a?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60324&ui=zh-cn&rs=zh-cn&ad=cn)
 * @desc 返回给定数目的项目的组合数。 使用 COMBIN 确定给定数量项目的总组数。
 * @param {Number} num
 * @param {Number} numChosen
 * @example
 * math.COMBIN(8,2) 从八个候选人中提取两个候选人的组合数
 * => 28
 * @returns {Number}
 * @memberof MATH#
 */

const COMBIN = function (num = base.nil(), numChosen = base.nil()) {
  if (
    num < 0 ||
    numChosen < 0 ||
    typeof num !== 'number' ||
    typeof numChosen !== 'number'
  ) {
    throw new Error(base.errorObj.num)
  }
  return $.math.combination(num | 0, numChosen | 0)
}

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/combina-%e5%87%bd%e6%95%b0-efb49eaa-4f4c-4cd2-8179-0ddfcf9d035d?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60616&ui=zh-cn&rs=zh-cn&ad=cn)
 * @desc 返回给定数目的项的组合数（包含重复）。
 * @param {Number} num
 * @param {Number} numChosen
 * @example
 * math.COMBINA(10,3)
 * => 220
 * @returns {Number}
 * @memberof MATH#
 */

const COMBINA = function (num = base.nil(), numChosen = base.nil()) {
  if (
    num < 0 ||
    numChosen < 0 ||
    typeof num !== 'number' ||
    typeof numChosen !== 'number'
  ) {
    throw new Error(base.errorObj.num)
  }
  return $.math.hCombin(num | 0, numChosen | 0)
}

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/cos-%e5%87%bd%e6%95%b0-0fb808a5-95d6-4553-8148-22aebdce5f05?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60064&ui=zh-cn&rs=zh-cn&ad=cn)
 * @desc 返回已知角度的余弦值。
 * @param {Number} num
 * @example
 * math.COS(1.047)
 * => 0.5001711
 * @returns {Number}
 * @memberof MATH#
 */

const COS = function (num = base.nil()) {
  return Math.cos(num)
}

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/cosh-%E5%87%BD%E6%95%B0-e460d426-c471-43e8-9540-a57ff3b70555)
 * @desc 返回数字的双曲余弦值。
 * @param {Number} num
 * @example
 * math.COSH(4)
 * => 27.308233
 * @returns {Number}
 * @memberof MATH#
 */

const COSH = function (num = base.nil()) {
  return Math.cosh(num)
}

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/cot-%E5%87%BD%E6%95%B0-c446f34d-6fe4-40dc-84f8-cf59e5f5e31a)
 * @desc 返回以弧度表示的角度的余切值。
 * @param {Number} num
 * @example
 * math.COT(30)
 * => -0.156
 * @returns {Number}
 * @memberof MATH#
 */

const COT = function (num = base.nil()) {
  if (typeof num !== 'number') {
    throw new Error(base.errorObj.value)
  }
  if (Math.abs(num) > base.constVar['2^27']) {
    throw new Error(base.errorObj.num)
  }
  if (num === 0) {
    throw new Error(base.errorObj.div0)
  }
  return 1 / Math.tan(num)
}

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/coth-%E5%87%BD%E6%95%B0-2e0b4cb6-0ba0-403e-aed4-deaa71b49df5)
 * @desc 返回一个双曲角度的双曲余切值。
 * @param {Number} num
 * @example
 * math.COTH(2)
 * => 1.0373147207275482
 * @returns {Number}
 * @memberof MATH#
 */

const COTH = function (num = base.nil()) {
  if (typeof num !== 'number') {
    throw new Error(base.errorObj.value)
  }
  return 1 / Math.tanh(num)
}

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/csc-%E5%87%BD%E6%95%B0-07379361-219a-4398-8675-07ddc4f135c1)
 * @desc 返回角度的余割值，以弧度表示。
 * @param {Number} num
 * @example
 * math.CSC(15)
 * => 1.538
 * @returns {Number}
 * @memberof MATH#
 */

const CSC = function (num = base.nil()) {
  if (typeof num !== 'number') {
    throw new Error(base.errorObj.value)
  }
  if (Math.abs(num) > base.constVar['2^27']) {
    throw new Error(base.errorObj.num)
  }
  return 1 / Math.sin(num)
}

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/csc-%E5%87%BD%E6%95%B0-07379361-219a-4398-8675-07ddc4f135c1)
 * @desc 返回角度的双曲余割值，以弧度表示。
 * @param {Number} num
 * @example
 * math.CSCH(1.5)
 * => 0.4696
 * @returns {Number}
 * @memberof MATH#
 */

const CSCH = function (num = base.nil()) {
  if (typeof num !== 'number') {
    throw new Error(base.errorObj.value)
  }
  if (Math.abs(num) > base.constVar['2^27']) {
    throw new Error(base.errorObj.num)
  }
  return 1 / Math.sinh(num)
}

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/decimal-%E5%87%BD%E6%95%B0-ee554665-6176-46ef-82de-0a283658da2e)
 * @desc 按给定基数将数字的文本表示形式转换成十进制数。
 * @param {Number} num
 * @param {Number} radix
 * @example
 * math.DECIMAL("zap",36)
 * => 45745
 * @returns {Number}
 * @memberof MATH#
 */

const DECIMAL = function (num = base.nil(), radix = base.nil()) {
  if (num + '' > 255 || radix < 2 || radix > 36) {
    throw new Error(base.errorObj.num)
  }
  return parseInt(num, radix | 0)
}

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/degrees-%e5%87%bd%e6%95%b0-4d6ec4db-e694-4b94-ace0-1cc3f61f9ba1?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60391&ui=zh-cn&rs=zh-cn&ad=cn)
 * @desc 将弧度转换为度。
 * @param {Number} angle
 * @example
 * math.DEGREES(Math.PI)
 * => 180
 * @returns {Number}
 * @memberof MATH#
 */

const DEGREES = function (angle = base.nil()) {
  return (angle * 180) / Math.PI
}

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/even-%E5%87%BD%E6%95%B0-197b5f06-c795-4c1e-8696-3c3b8a646cf9)
 * @desc 返回数字向上舍入到的最接近的偶数。 您可以使用此函数来处理成对出现的项目。 例如，一个包装箱一行可以装一宗或两宗货物。 将这些货物的数目向上舍入到最接近的偶数，只有当该值与包装箱的容量一致时，包装箱才会装满。
 * @param {Number} angle
 * @example
 * math.EVEN(-1)
 * => -2
 * @returns {Number}
 * @memberof MATH#
 */
const EVEN = function (num = base.nil()) {
  if (typeof num !== 'number') {
    throw new Error(base.errorObj.value)
  }
  return CEILINGMATH(num, 2, num < 0 ? 1 : null)
}
/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/exp-%e5%87%bd%e6%95%b0-c578f034-2c45-4c37-bc8c-329660a63abe?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60069&ui=zh-cn&rs=zh-cn&ad=cn)
 * @desc 返回 e 的 n 次幂。 常数 e 等于 2.71828182845904，是自然对数的底数。
 * @param {Number} num
 * @example
 * math.EXP(1)
 * => 2.71828183
 * @returns {Number}
 * @memberof MATH#
 */
const EXP = function (num = base.nil()) {
  return Math.exp(num)
}
/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/fact-%E5%87%BD%E6%95%B0-ca8588c2-15f2-41c0-8e8c-c11bd471a4f3)
 * @desc 返回数的阶乘。 一个数的阶乘等于 1*2*3*...* 该数。
 * @param {Number} num
 * @example
 * math.FACT(5)
 * => 120
 * @returns {Number}
 * @memberof MATH#
 */
const FACT = function (num = base.nil()) {
  if (typeof num !== 'number') {
    throw new Error(base.errorObj.value)
  }
  if (num < 0) {
    throw new Error(base.errorObj.num)
  }
  if (num === 0 || num === 1) return 1
  num = num | 0
  return num * FACT(num - 1)
}
/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/factdouble-%E5%87%BD%E6%95%B0-e67697ac-d214-48eb-b7b7-cce2589ecac8)
 * @desc 返回数字的双倍阶乘。
 * @param {Number} num
 * @example
 * math.FACTDOUBLE(6)
 * => 48
 * math.FACTDOUBLE(7)
 * => 105
 * @returns {Number}
 * @memberof MATH#
 */
const FACTDOUBLE = function (num = base.nil()) {
  if (typeof num !== 'number') {
    throw new Error(base.errorObj.value)
  }
  if (num < 0) {
    throw new Error(base.errorObj.num)
  }
  if (num === 0 || num === 1) return 1
  num = num | 0
  return num * FACTDOUBLE(num - 2)
}
/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/floor-%E5%87%BD%E6%95%B0-14bb497c-24f2-4e04-b327-b0b4de5a8886)
 * @desc 将参数 number 向下舍入（沿绝对值减小的方向）为最接近的 significance 的倍数。
 * @param {Number} num
 * @param {Number} significance
 * @example
 * math.FLOOR(1.58,0.1)
 * => 1.5
 * @returns {Number}
 * @memberof MATH#
 */
const FLOOR = function (num = base.nil(), significance = base.nil()) {
  if (Math.sign(num) + Math.sign(significance) === 0) {
    throw new Error(base.errorObj.num)
  }
  return CEILINGMATH(num, significance, 1)
}

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/floor-math-%E5%87%BD%E6%95%B0-c302b599-fbdb-4177-ba19-2c2b1249a2f5)
 * @desc 将数字向下舍入为最接近的整数或最接近的指定基数的倍数。
 * @param {Number} num
 * @param {Number} significance
 * @param {Number} mode
 * @example
 * math.FLOORMATH(-5.5,2,-1)
 * => -4
 * @returns {Number}
 * @memberof MATH#
 */
const FLOORMATH = function (num = base.nil(), significance = 1, mode = 0) {
  return CEILINGMATH(num, significance, mode ? 0 : 1)
}
/**
 * [参考资料](https://support.microsoft.com/zh-tw/office/floor-precise-%E5%87%BD%E6%95%B8-f769b468-1452-4617-8dc3-02f842a0702e)
 * @desc 傳回無條件捨去成最接近的整數或最接近的基數倍數的數字。 無論數字的正負號，都會將數字捨位。 但是，如果 number 或 significance 為零，則傳回零。
 * @param {Number} num
 * @param {Number} significance
 * @example
 * math.FLOORPRECISE(3.2,-1)
 * => 3
 * @returns {Number}
 * @memberof MATH#
 */
const FLOORPRECISE = function (num = base.nil(), significance = 1) {
  return CEILINGMATH(num, Math.abs(significance), 1)
}
/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/gcd-%E5%87%BD%E6%95%B0-d5107a51-69e3-461f-8e4c-ddfc21b5073a)
 * @desc 返回两个或多个整数的最大公约数。 最大公约数是能够同时整除 number1 和 number2 而没有余数的最大整数。
 * @param {Number} num
 * @param {Number} rest
 * @example
 * math.GCD(7, 1)
 * => 1
 * @returns {Number}
 * @memberof MATH#
 */
const GCD = function (num = base.nil(), ...rest) {
  if (typeof num !== 'number') {
    throw new Error(base.errorObj.value)
  }
  if (num < 0 || rest.some(it => it < 0)) {
    throw new Error(base.errorObj.num)
  }
  return [num, ...rest]
    .filter(it => it > 0)
    .reduce((a, b) => {
      return $.math.gcd(a, b)
    })
}
/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/int-%E5%87%BD%E6%95%B0-a6c4af9e-356d-4369-ab6a-cb1fd9d343ef)
 * @desc 将数字向下舍入到最接近的整数。
 * @param {Number} num
 * @example
 * math.INT(-8.9)
 * => -9
 * @returns {Number}
 * @memberof MATH#
 */
const INT = function (num = base.nil()) {
  return (num | 0) + (num < 0 ? -1 : 0)
}
/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/lcm-%E5%87%BD%E6%95%B0-7152b67a-8bb5-4075-ae5c-06ede5563c94)
 * @desc 返回整数的最小公倍数。 最小公倍数是所有整数参数 number1、number2 等的倍数中的最小正整数。 使用 LCM 添加具有不同分母的分数。
 * @param {Number} num
 * @param {Number} rest
 * @example
 * math.LCM(24, 36)
 * => 72
 * @returns {Number}
 * @memberof MATH#
 */
const LCM = function (num = base.nil(), ...rest) {
  let arr = [num, ...rest]
  if (arr.includes(0)) {
    return 0
  }
  return arr.reduce((a, b) => (a * b) / $.math.gcd(a, b))
}
/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/ln-%E5%87%BD%E6%95%B0-81fe1ed7-dac9-4acd-ba1d-07a142c6118f)
 * @desc 返回数字的自然对数。 自然对数以常数 e (2.71828182845904) 为底。
 * @param {Number} num
 * @example
 * math.LN(2.7182818)
 * => 1
 * @returns {Number}
 * @memberof MATH#
 */
const LN = function (num = base.nil()) {
  return Math.log(num)
}
/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/log-%E5%87%BD%E6%95%B0-4e82f196-1ca9-4747-8fb0-6c4a3abb3280)
 * @desc 根据指定底数返回数字的对数。
 * @param {Number} num
 * @param {Number} base
 * @example
 * math.LOG(8, 2)
 * => 3
 * @returns {Number}
 * @memberof MATH#
 */
const LOG = function (num = base.nil(), base = 10) {
  if (num <= 0) {
    throw new Error(base.errorObj.num)
  }
  return Math.log(num) / Math.log(base)
}
/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/log10-%E5%87%BD%E6%95%B0-c75b881b-49dd-44fb-b6f4-37e3486a0211)
 * @desc 返回数字以 10 为底的对数。
 * @param {Number} num
 * @example
 * math.LOG10(86)
 * => 1.9345
 * @returns {Number}
 * @memberof MATH#
 */
const LOG10 = function (num = base.nil()) {
  return LOG(num)
}
/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/mdeterm-%E5%87%BD%E6%95%B0-e7bfa857-3834-422b-b871-0ffd03717020)
 * @desc 返回一个数组的矩阵行列式的值。
 * @param {Array} mat
 * @example
 * math.MDETERM([
    [1, 3, 8, 5],
    [1, 3, 6, 1],
    [1, 1, 1, 0],
    [7, 3, 10, 0]
  ])
 * => 88
 * @returns {Number}
 * @memberof MATH#
 */
const MDETERM = function (mat = base.nil()) {
  try {
    return $.math.mat.det(mat)
  } catch (e) {
    throw new Error(base.errorObj.num)
  }
}
const MINVERSE = function (mat = base.nil()) {
  try {
    return $.math.mat.inv(mat)
  } catch (e) {
    throw new Error(base.errorObj.num)
  }
}
const MMULT = function (a = base.nil(), b = base.nil()) {
  try {
    return $.math.mat.mul(a, b)
  } catch (e) {
    throw new Error(base.errorObj.num)
  }
}
const MOD = function (num, divisor) {
  if (divisor === 0) {
    throw new Error(base.errorObj.div0)
  }
  return num - divisor * INT(num / divisor)
}
const MROUND = function (num = base.nil(), multi = base.nil()) {
  if (Math.sign(num) + Math.sign(multi) === 0) {
    throw new Error(base.errorObj.num)
  }
  if (multi === 0) {
    return 0
  }
  return Math.round(num / multi) * multi
}
const MULTINOMIAL = function (...num) {
  if (num.some(it => it < 0)) {
    throw new Error(base.errorObj.num)
  }
  let sum = $.math.sum(num)
  let sumMul = 1
  num.forEach(x => (sumMul *= FACT(x)))
  try {
    return FACT(sum) / sumMul
  } catch (e) {
    throw new Error(base.errorObj.num)
  }
}

const MUNIT = function (dim = base.nil()) {
  if (dim <= 0) {
    throw new Error(base.errorObj.num)
  }
  return $.math.mat.identity(dim | 0)
}
const ODD = function (num = base.nil()) {
  if (typeof num !== 'number') {
    throw new Error(base.errorObj.value)
  }
  if ((num - 1) % 2 === 0) {
    return num
  } else {
    return CEILINGMATH(num, 2) + Math.sign(num)
  }
}
const PI = function () {
  return Math.PI
}
const POWER = function (num = base.nil(), power = base.nil()) {
  return num ** power
}
const PRODUCT = function (...num) {
  return num.reduce((a, b) => a * b)
}
const QUOTIENT = function (numerator = base.nil(), denominator = base.nil()) {
  if ((typeof numerator !== 'number', typeof denominator !== 'number')) {
    throw new Error(base.errorObj.value)
  }
  return (numerator / denominator) | 0
}
const RADIANS = function (angle = base.nil()) {
  return (Math.PI * angle) / 180
}
const RAND = function () {
  return Math.random()
}
const RANDBETWEEN = function (bottom = base.nil(), top = base.nil()) {
  top = top | 0
  bottom = bottom | 0
  return $.math.uniformRandInt(bottom, top)
}
const ROMAN = function (num = base.nil()) {
  if (num < 0 || num > 3999) {
    throw new Error(base.errorObj.value)
  }
  let digits = String(num).split('')
  let key = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
    '',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC',
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX'
  ]
  let r = ''
  let i = 3
  while (i--) {
    r = (key[+digits.pop() + i * 10] || '') + r
  }
  return new Array(+digits.join('') + 1).join('M') + r
}
const ROUND = function (num = base.nil(), numDigits = base.nil()) {
  if (typeof num !== 'number') {
    throw new Error(base.errorObj.value)
  }
  if (num < 0) {
    return -(-num).round(numDigits | 0)
  } else {
    return num.round(numDigits | 0)
  }
  //
}
const ROUNDDOWN = function (num = base.nil(), numDigits = base.nil()) {
  if (typeof num !== 'number') {
    throw new Error(base.errorObj.value)
  }
  numDigits = numDigits | 0
  return (
    (Math.sign(num) * Math.floor(Math.abs(num) * Math.pow(10, numDigits))) /
    Math.pow(10, numDigits)
  )
}

const ROUNDUP = function (num = base.nil(), numDigits = base.nil()) {
  if (typeof num !== 'number') {
    throw new Error(base.errorObj.value)
  }
  numDigits = numDigits | 0
  return (
    (Math.sign(num) * Math.ceil(Math.abs(num) * Math.pow(10, numDigits))) /
    Math.pow(10, numDigits)
  )
}
const SEC = function (num = base.nil()) {
  return 1 / Math.cos(num)
}

const SECH = function (num = base.nil()) {
  return 1 / Math.cosh(num)
}

const SERIESSUM = function (
  x = base.nil(),
  n = base.nil(),
  m = base.nil(),
  coefficients = base.nil()
) {
  let sum = 0
  for (let i = 0; i < coefficients.length; i++) {
    sum += coefficients[i] * Math.pow(x, n + i * m)
  }
  return sum
}

const SIGN = function (num = base.nil()) {
  return Math.sign(num)
}
const SIN = function (num = base.nil()) {
  return Math.sin(num)
}
const SINH = function (num = base.nil()) {
  return Math.sinh(num)
}
const SQRT = function (num = base.nil()) {
  if (num < 0) {
    throw new Error(base.errorObj.num)
  }
  return Math.sqrt(num)
}
const SQRTPI = function (num = base.nil()) {
  if (num < 0) {
    throw new Error(base.errorObj.num)
  }
  return Math.sqrt(num * PI())
}
//const SUBTOTAL = function (num = base.nil()) {}
const SUM = function (...num) {
  return $.math.sum(num)
}
//const SUMIF
//const SUMIFS
const SUMPRODUCT = function (...arr) {
  let sum = 0
  let m = $.math.mat.transpose(arr)
  return m.map(x => x.reduce((a, b) => a * b)).reduce((a, b) => a + b)
}
const SUMSQ = function (...arr) {
  return arr.reduce((a, b) => a * a + b * b)
}
const SUMX2MY2 = function (x = [], y = []) {
  let sum = 0
  for (let i = 0; i < x.length; i++) {
    sum += x[i] ** 2 - y[i] ** 2
  }
  return sum
}
const SUMX2PY2 = function (x = [], y = []) {
  let sum = 0
  for (let i = 0; i < x.length; i++) {
    sum += x[i] ** 2 + y[i] ** 2
  }
  return sum
}
const SUMXMY2 = function (x = [], y = []) {
  let sum = 0
  for (let i = 0; i < x.length; i++) {
    sum += (x[i] - y[i]) ** 2
  }
  return sum
}

const TAN = function (num = base.nil()) {
  if (typeof num !== 'number') {
    throw new Error(base.errorObj.value)
  }
  return Math.tan(num)
}
const TANH = function (num = base.nil()) {
  if (typeof num !== 'number') {
    throw new Error(base.errorObj.value)
  }
  return Math.sinh(num) / Math.cosh(num)
}

const TRUNC = function (num = base.nil(), numDigits = 0) {
  if (typeof num !== 'number') {
    throw new Error(base.errorObj.value)
  }
  return ROUNDDOWN(num, numDigits)
}

mathObj = {
  ABS,
  ACOS,
  ACOSH,
  ACOT,
  ACOTH,
  ARABIC,
  ASIN,
  ASINH,
  ATAN,
  ATAN2,
  ATANH,
  BASE,
  CEILINGMATH,
  COMBIN,
  COMBINA,
  COS,
  COSH,
  COT,
  COTH,
  CSC,
  CSCH,
  DECIMAL,
  DEGREES,
  EVEN,
  EXP,
  FACT,
  FACTDOUBLE,
  FLOOR,
  FLOORMATH,
  FLOORPRECISE,
  GCD,
  INT,
  LCM,
  LN,
  LOG,
  LOG10,
  MDETERM,
  MINVERSE,
  MMULT,
  MOD,
  MROUND,
  MULTINOMIAL,
  MUNIT,
  ODD,
  PI,
  POWER,
  PRODUCT,
  QUOTIENT,
  RADIANS,
  RAND,
  RANDBETWEEN,
  ROMAN,
  ROUND,
  ROUNDDOWN,
  ROUNDUP,
  SEC,
  SECH,
  SERIESSUM,
  SIGN,
  SIN,
  SINH,
  SQRT,
  SQRTPI,
  SUM,
  SUMPRODUCT,
  SUMSQ,
  SUMX2MY2,
  SUMX2PY2,
  SUMXMY2,
  TAN,
  TANH,
  TRUNC
}

module.exports = mathObj
