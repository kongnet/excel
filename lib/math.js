const base = require('./base.js')

const abs = (n = base.nil()) => Math.abs(n)
const acos = (n = base.nil()) => Math.acos(n)
const acosh = (n = base.nil()) => Math.acosh(n)
const acot = (n = base.nil()) => Math.atan(1 / n) // or Math.PI / 2 - Math.atan(n)
const acoth = (n = base.nil()) => Math.log((n + 1) / (n - 1)) * 0.5
//AGGREGATE
const arabic = s => {
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
const asin = (n = base.nil()) => Math.asin(n)
const asinh = (n = base.nil()) => Math.log(n + Math.sqrt(n * n + 1))
const atan = (n = base.nil()) => Math.atan(n)
const atan2 = (x = base.nil(), y = base.nil()) => Math.atan2(x, y)
const atanh = (n = base.nil()) => Math.log((1 + n) / (1 - n)) * 0.5

console.log(asinh(1.5))

const mathObj = {
  abs,
  acos,
  acosh,
  acot,
  acoth,
  arabic,
  asin,
  asinh,
  atan,
  atan2,
  atanh
}

module.exports = mathObj