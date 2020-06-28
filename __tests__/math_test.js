const math = require('../lib/math.js')

test('math asin', async () => {
  expect(() => {
    math.asin()
  }).toThrowError(new Error('#NULL!'))
  expect(math.asin(-1)).toStrictEqual(-1.5707963267948966)
})
