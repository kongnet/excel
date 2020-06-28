/**
 * @namespace MATH
 */
const base = require('./base.js')

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

//console.log(asinh(1.5))

const mathObj = {
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
  ATANH
}

module.exports = mathObj
