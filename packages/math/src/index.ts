import * as errors from 'shared/errors'

/**
 * 返回数字的绝对值。 一个数字的绝对值是该数字不带其符号的形式
 * - [参考资料](https://support.microsoft.com/zh-cn/office/abs-%e5%87%bd%e6%95%b0-3420200f-5628-4e8c-99da-c99d7c87713c?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60072&ui=zh-cn&rs=zh-cn&ad=cn)
 */
export const abs = (n = errors.nil()) => Math.abs(n)

/**
 * 返回数字的反余弦值。 反余弦值是指余弦值为 number 的角度。 返回的角度以弧度表示，弧度值在 0（零）到 pi 之间。
 * - [参考资料](https://support.microsoft.com/zh-cn/office/acos-%e5%87%bd%e6%95%b0-cb73173f-d089-4582-afa1-76e5524b5d5b?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60147&ui=zh-cn&rs=zh-cn&ad=cn)
 */
export const acos = (n = errors.nil()) => Math.acos(n)

/**
 * 返回数字的反双曲余弦值。 该数字必须大于或等于 1。 反双曲余弦值是指双曲余弦值为 number 的值，因此 ACOSH(COSH(number)) 等于 number。 大于或等于 1 的任意实数。
 * - [参考资料](https://support.microsoft.com/zh-cn/office/acosh-%e5%87%bd%e6%95%b0-e3992cc1-103f-4e72-9f04-624b9ef5ebfe?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60281&ui=zh-cn&rs=zh-cn&ad=cn)
 */
export const acosh = (n = errors.nil()) => Math.acosh(n)

/**
 * 返回数字的反余切值的主值。 Number 为所需角度的余切值。 此值必须是实数。
 * - [参考资料](https://support.microsoft.com/zh-cn/office/acot-%E5%87%BD%E6%95%B0-dc7e5008-fe6b-402e-bdd6-2eea8383d905)
 */
export const acot = (n = errors.nil()) => Math.PI / 2 - Math.atan(n)

/**
 * 返回数字的反双曲余切值。 Number 的绝对值必须大于 1。
 * - [参考资料](https://support.microsoft.com/zh-cn/office/acoth-%e5%87%bd%e6%95%b0-cc49480f-f684-4171-9fc5-73e4e852300f?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60597&ui=zh-cn&rs=zh-cn&ad=cn)
 */
export const acoth = (n = errors.nil()) => Math.log((n + 1) / (n - 1)) / 2
