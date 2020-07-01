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
//AGGREGATE
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
  if (num < 0 || radix < 2 || radix > 36 || minLen < 0 || minLen > 255)
    throw base.errorObj.num
  const r = num.toString(radix)
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
const CEILINGMATH = function (num = base.nil(), significance = 1, mode = 0) {
  significance = significance | 0 //取整
  return Math[mode ? 'floor' : 'ceil'](num / significance) * significance
}
/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/combin-%e5%87%bd%e6%95%b0-12a3f276-0a21-423a-8de6-06990aaf638a?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60324&ui=zh-cn&rs=zh-cn&ad=cn)
 * @desc 返回给定数目的项目的组合数。 使用 COMBIN 确定给定数量项目的总组数。
 * @param {Number} num
 * @param {Number} num_chosen
 * @example
 * math.COMBIN(8,2) 从八个候选人中提取两个候选人的组合数
 * => 28
 * @returns {Number}
 * @memberof MATH#
 */
const COMBIN = function (num = base.nil(), num_chosen = base.nil()) {
  if (
    num < 0 ||
    num_chosen < 0 ||
    typeof num !== 'number' ||
    typeof num_chosen !== 'number'
  )
    throw base.errorObj.num
  return $.math.combination(num | 0, num_chosen | 0)
}
/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/combina-%e5%87%bd%e6%95%b0-efb49eaa-4f4c-4cd2-8179-0ddfcf9d035d?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60616&ui=zh-cn&rs=zh-cn&ad=cn)
 * @desc 返回给定数目的项的组合数（包含重复）。
 * @param {Number} num
 * @param {Number} num_chosen
 * @example
 * math.COMBINA(10,3)
 * => 220
 * @returns {Number}
 * @memberof MATH#
 */
const COMBINA = function (num = base.nil(), num_chosen = base.nil()) {
  if (
    num < 0 ||
    num_chosen < 0 ||
    typeof num !== 'number' ||
    typeof num_chosen !== 'number'
  )
    throw base.errorObj.num
  return $.math.hCombin(num | 0, num_chosen | 0)
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
  if (typeof num !== 'number') throw base.errorObj.value
  if (Math.abs(num) > base.constVar['2^27']) throw base.errorObj.num
  if (num === 0) throw base.errorObj.div0
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
  if (typeof num !== 'number') throw base.errorObj.value
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
  if (typeof num !== 'number') throw base.errorObj.value
  if (Math.abs(num) > base.constVar['2^27']) throw base.errorObj.num
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
  if (typeof num !== 'number') throw base.errorObj.value
  if (Math.abs(num) > base.constVar['2^27']) throw base.errorObj.num
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
  if (num + '' > 255 || radix < 2 || radix > 36) throw base.errorObj.num
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
  if (typeof num !== 'number') throw base.errorObj.value
  return CEILINGMATH(num, 2, num < 0 ? 1 : null)
}
/*

EXP
FACT
FACTDOUBLE
FLOOR
FLOOR.MATH
FLOORPRECISE
GCD
INT
LCM
LN
LOG
LOG10
MDETERM
MINVERSE
MMULT
MOD
MROUND
MULTINOMIAL
MUNT
ODD
PI
POWER
PRODUCT
QUOTIENT
RADIANS
RAND
RANDBETWEEN
ROMAN
ROUND
ROUNDDOWN
ROUNDUP
SEC
SECH
SERIESSUM
SIGN
SIN
SINH
SQRT
SQRTPI
SUBTOTAL
SUM
SUMIF
SUMIFS
SUMPRODUCT
SUMSQ
SUMX2MY2
SUMX2PY2
SUMXMY2
TAN
TANH
TRUNC
*/

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
  EVEN
}

module.exports = mathObj
