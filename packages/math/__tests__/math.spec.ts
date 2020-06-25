import { abs, acos, acosh, acot, acoth } from '../src'

describe('Math', () => {
  it('abs', () => {
    expect(abs(1)).toEqual(1)
  })
  it('acos', () => {
    expect(acos(1)).toEqual(0)
  })
  it('acosh', () => {
    expect(acosh(1)).toEqual(0)
  })
  // it('acot', () => {
  //   expect(acot(1)).toEqual(1)
  // })
  // it('acoth', () => {
  //   expect(acoth(1)).toEqual(1)
  // })
})
