import { ABS, ACOS, ACOSH, ACOT, ACOTH } from '../src'

describe('Math', () => {
  it('ABS', () => {
    expect(ABS(1)).toEqual(1)
  })
  it('ACOS', () => {
    expect(ACOS(1)).toEqual(0)
  })
  it('ACOSH', () => {
    expect(ACOSH(1)).toEqual(0)
  })
  // it('ACOT', () => {
  //   expect(ACOT(1)).toEqual(1)
  // })
  // it('ACOTH', () => {
  //   expect(ACOTH(1)).toEqual(1)
  // })
})
