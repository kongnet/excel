const base = require('./base.js')

const abs = (n = base.nil()) => Math.abs(n)
const acos = (n = base.nil()) => Math.acos(n)
const acosh = (n = base.nil()) => Math.acosh(n)
const acot = (n = base.nil()) => Math.PI / 2 - Math.atan(n)
const acoth = (n = base.nil()) => Math.log((n + 1) / (n - 1)) / 2

console.log(acoth(6))

const mathObj = {
  abs,
  acos,
  acosh,
  acot,
  acoth
}

module.exports = mathObj
