const base = require('../lib/base.js')
const err = base.errorObj
const logical = require('../lib/logical.js')

describe('逻辑函数测试', () => {
  test('logical AND', async () => {
    expect(() => {
      logical.AND()
    }).toThrowError(new Error(err.value))
    expect(logical.AND(-1 === -1)).toStrictEqual(true)
    expect(logical.AND(-1 === -1, 2 === 5)).toStrictEqual(false)
  })
  test('logical FALSE', async () => {
    expect(logical.FALSE()).toStrictEqual(false)
    expect(logical.FALSE('xx')).toStrictEqual(false)
    expect(base.toBool(logical.FALSE())).toStrictEqual('FALSE')
  })
  test('logical TRUE', async () => {
    expect(logical.TRUE()).toStrictEqual(true)
    expect(logical.TRUE('xx')).toStrictEqual(true)
    expect(base.toBool(logical.TRUE())).toStrictEqual('TRUE')
  })
  test('logical XOR', async () => {
    expect(() => {
      logical.XOR()
    }).toThrowError(new Error(err.value))
    expect(logical.XOR(3 > 0, 2 < 9)).toStrictEqual(false)
    expect(logical.XOR(3 > 12, 4 > 6)).toStrictEqual(false)
    expect(logical.XOR(3 < 12, 4 > 6)).toStrictEqual(true)
  })
  test('logical OR', async () => {
    expect(() => {
      logical.OR()
    }).toThrowError(new Error(err.value))
    expect(logical.OR(3 > 0, 2 < 9)).toStrictEqual(true)
    expect(logical.OR(3 > 12, 4 > 6)).toStrictEqual(false)
    expect(logical.OR(3 > 12, 4 > 6, 2 > 1, 1 < 2)).toStrictEqual(true)
  })
  test('logical NOT', async () => {
    expect(logical.NOT(3 > 0, 2 < 9)).toStrictEqual(false)
    expect(logical.NOT()).toStrictEqual(true)
  })
  test('logical IF', async () => {
    expect(() => {
      logical.IF()
    }).toThrowError(new Error(err.nil))
    expect(logical.IF(3 > 0, 1, 0)).toStrictEqual(1)
    expect(logical.IF(3 < 0, 1, 0)).toStrictEqual(0)
  })
  test('logical IFERROR', async () => {
    expect(() => {
      logical.IFERROR()
    }).toThrowError(new Error(err.nil))
    expect(() => {
      logical.IFERROR('#DIV/0!')
    }).toThrowError(new Error(err.nil))
    expect(logical.IFERROR(3 > 0, 2 < 9)).toStrictEqual(true)
    expect(logical.IFERROR('#DIV/0!', '除数为0')).toStrictEqual('除数为0')
  })
  test('logical IFNA', async () => {
    expect(() => {
      logical.IFNA()
    }).toThrowError(new Error(err.nil))
    expect(() => {
      logical.IFNA('#DIV/0!')
    }).toThrowError(new Error(err.nil))
    expect(logical.IFNA('#N/A', 2 > 9)).toStrictEqual(false)
    expect(logical.IFNA('#DIV/0!', '除数为0')).toStrictEqual('#DIV/0!')
  })
})
