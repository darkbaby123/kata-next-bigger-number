const nextBigger = require('../lib/index')

describe('next bigger number', () => {
  function testCase({ orig, dest, focus = false }) {
    const text = `${orig} -> ${dest}`
    const fn = () => { expect(nextBigger(orig)).toEqual(dest) }
    focus ? it.only(text, fn) : it(text, fn)
  }

  // To test one case, use "focus"
  // testCase({ orig: 12, dest: 21, focus: true })
  testCase({ orig: 12, dest: 21 })
  testCase({ orig: 513, dest: 531 })
  testCase({ orig: 2017, dest: 2071 })
  testCase({ orig: 2375, dest: 2537 })
  testCase({ orig: 9, dest: -1 })
  testCase({ orig: 111, dest: -1 })
  testCase({ orig: 531, dest: -1 })
  testCase({ orig: 1234567890, dest: 1234567908 })
})
