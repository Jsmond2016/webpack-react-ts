let calc = require('./calc')

describe('测试用例', () => {
  test('1+1', () => {
    expect(calc.sum(1,1)).toBe(2)
  })
  
  test('111', () => {
    expect(calc.minus(1,1)).toBe(0)
  })
})