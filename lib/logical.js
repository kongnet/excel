/**
 * @namespace LOGICAL
 */

const base = require('./base.js')

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/and-%E5%87%BD%E6%95%B0-5f19b2e8-e1df-4408-897a-ce285a19e9d9)
 * @desc 用于确定测试中的所有条件是否均为 TRUE
 * @param {Any}
 * @example
 * logical.AND(-1===-1,2!==2)
 * => false
 * @returns {Number}
 * @memberof LOGICAL#
 */

const AND = (...arg) => {
  if (!arg.length) {
    throw base.errorObj.value
  }
  return arg.every(x => x === !0)
}

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/false-%E5%87%BD%E6%95%B0-2d58dfa5-9c03-4259-bf8f-f0ae14346904)
 * @desc 返回逻辑值 FALSE。
 * @example
 * logical.FALSE()
 * => false
 * @returns {Boolean}
 * @memberof LOGICAL#
 */

const FALSE = () => false

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/if-%E5%87%BD%E6%95%B0-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2)
 * @desc IF 语句可能有两个结果。 第一个结果是比较结果为 True，第二个结果是比较结果为 False。
 * @example
 * logical.IF(a[0]==='Yes',1,2)
 * => 1
 * @returns {Any}
 * @memberof LOGICAL#
 */

const IF = (cond = base.nil(), x, y) => cond ? x : y

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/iferror-%E5%87%BD%E6%95%B0-c526fd07-caeb-47b8-8bb6-63f3e417f611)
 * @desc 如果公式的计算结果为错误值，则 IFERROR 返回您指定的值;否则，它将返回公式的结果。
 * @example
 * logical.IFERROR('#NUM!',5)
 * => 5
 * @returns {Any}
 * @memberof LOGICAL#
 */

const IFERROR = (x = base.nil(), y = base.nil()) =>
  base.errorList.includes(x) ? y : x

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/ifna-%E5%87%BD%E6%95%B0-6626c961-a569-42fc-a49d-79b4951fd461)
 * @desc 如果公式返回错误值 #N/A，则结果返回您指定的值；否则返回公式的结果。
 * @example
 * logical.IFNA('Yes',1)
 * => 1
 * @returns {Any}
 * @memberof LOGICAL#
 */

const IFNA = (x = base.nil(), y = base.nil()) =>
  x === base.errorObj.na ? y : x

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/not-%E5%87%BD%E6%95%B0-9cfc6011-a054-40c7-a140-cd4ba2d87d77)
 * @desc 如果你想确保一个值不等同于另一值，请使用 NOT 函数
 * @example
 * logical.NOT(1===1)
 * => false
 * @returns {Boolean}
 * @memberof LOGICAL#
 */

const NOT = n => !n

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/or-%E5%87%BD%E6%95%B0-7d17ad14-8700-4281-b308-00b131e22af0)
 * @desc 用于确定测试中的所有条件是否均为 TRUE。
 * @param {Boolean}
 * @example
 * logical.OR(-1!==-1,2===2)
 * => TRUE
 * @returns {Number}
 * @memberof LOGICAL#
 */

const OR = (...arg) => {
  if (!arg.length) {
    throw base.errorObj.value
  }
  return !!arg.some(x => x === !0)
}

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/true-%E5%87%BD%E6%95%B0-7652c6e3-8987-48d0-97cd-ef223246b3fb)
 * @desc 返回逻辑值 TRUE
 * @example
 * logical.TRUE()
 * => TRUE
 * @returns {Boolean}
 * @memberof LOGICAL#
 */

const TRUE = () => true

/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/xor-%E5%87%BD%E6%95%B0-1548d4c2-5e47-4f77-9a92-0533bba14f37)
 * @desc 返回所有参数的逻辑异或。
 * @param {Any}
 * @example
 * logical.XOR(1,1,1)
 * => TRUE
 * @returns {Boolean}
 * @memberof LOGICAL#
 */

const XOR = (...arg) => {
  if (!arg.length) {
    throw base.errorObj.value
  }
  // 参数中包含文本或空白单元格，则这些值将被忽略。
  return !!arg.filter(x => typeof x !== 'string').reduce((x, y) => x ^ y)
}

const logicalObj = {
  AND,
  FALSE,
  IF,
  IFERROR,
  IFNA,
  NOT,
  OR,
  TRUE,
  XOR
}

module.exports = logicalObj
