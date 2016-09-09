function nextBigger(num) {
  const nums = `${num}`.split('')
  return findNextBigger(nums, 2)
}

function findNextBigger(nums, lastCount) {
  if (lastCount > nums.length) return -1

  const [left, right] = partition(nums, lastCount)

  const nextBiggerRight = reorganize(right)
  if (nextBiggerRight) {
    return Number(left.concat(nextBiggerRight).join(''))
  }

  return findNextBigger(nums, lastCount + 1)
}

function partition(nums, lastCount) {
  const left = nums.slice(0, -1 * lastCount)
  const right = nums.slice(-1 * lastCount)
  return [left, right]
}

function reorganize(nums) {
  const [n, idx] = findNextBiggerNumInArray(nums, nums[0])

  if (idx < 0) return

  nums.splice(idx, 1)
  return [n].concat(nums.sort())
}

function findNextBiggerNumInArray(nums, target) {
  let bigger, biggerIdx
  nums.forEach((n, i) => {
    if (n > target && (!bigger || bigger > n)) {
      bigger = n
      biggerIdx = i
    }
  })
  return bigger ? [bigger, biggerIdx] : [undefined, -1]
}

module.exports = nextBigger
