function nextBigger(n) {
  const [left, right] = splitDigits(`${n}`.split(''), 2)
  if (!left) return -1
  return Number(left.concat(resort(right)).join(''))
}

function splitDigits(digits, rightSize) {
  if (rightSize > digits.length) return []

  const right = digits.slice(-rightSize)
  if (right[0] < right[1]) return [digits.slice(0, -rightSize), right]

  return splitDigits(digits, rightSize + 1)
}

function resort(right) {
  const first = right[0]
  const rest = right.slice(1).sort()

  const idx = rest.findIndex(n => n > first)
  const p = rest[idx]
  rest[idx] = first
  return [p].concat(rest)
}

module.exports = nextBigger
