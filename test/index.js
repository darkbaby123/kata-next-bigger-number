const nextBigger = require('../lib/index')

describe('next bigger number', () => {
  [
    [12, 21],
    [513, 531],
    [2017, 2071],
    [2375, 2537],
    [9, -1],
    [111, -1],
    [531, -1],
    [1234567890, 1234567908],
  ].forEach(([num, result]) => {
    it(`${num} -> ${result}`, () => {
      expect(nextBigger(num)).toEqual(result)
    })
  })
})
