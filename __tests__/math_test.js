const math = require('../lib/math.js')

test('math asin', async () => {
  expect(math.asin()).toThrow()
  expect(math.asin(-1)).toStrictEqual(-1.5707963267948966)
})
