const math = require('../lib/math.js')
test('math abs', async () => {
  expect(math.abs(-1)).toStrictEqual(1)
})
test('math asin', async () => {
  expect(() => {
    math.asin()
  }).toThrowError(new Error('#NULL!'))
  expect(
    (() => {
      let r = math.asin(-1)
      return r
    })()
  ).toStrictEqual(-1.5707963267948966)
})
