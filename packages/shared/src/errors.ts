/**
 * 为空
 */
export function nil(): number {
  throw new Error('#NULL!')
}

/**
 * 被0除
 */
export function div0(): any {
  throw new Error('#DIV/0!')
}

/**
 * 当使用错误的参数或运算对象类型时，或者当公式自动更正功能不能更正公式时
 */
export function value(): any {
  throw new Error('#VALUE!')
}

/**
 * 引用无效
 */
export function ref(): any {
  throw new Error('#REF!')
}

/**
 * 名称写错了，也有可能是引号、逗号错误造成
 */
export function name(): any {
  throw new Error('#NAME?')
}

/**
 * 不是整数
 */
export function num(): any {
  throw new Error('#NUM!')
}

/**
 * 当在函数或bai公式中没有可用数值du时，将产生错误值#N/A
 */
export function na(): any {
  throw new Error('#N/A')
}

/**
 * 错误
 */
export function error(): any {
  throw new Error('#ERROR!')
}

/**
 * 获取数据
 */
export function data(): any {
  throw new Error('#GETTING_DATA!')
}
