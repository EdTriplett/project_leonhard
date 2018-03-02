/*
Power digit sum
Problem 16
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

let powerDigitSum = num => {
  let sum = 0
  while (num >= 10) {
    sum += num % 10
    num = Math.floor(num/10)
  }
  sum += num
  return sum
}

let input = Math.pow(2, 1000)
// too many significant digits
console.log('input = ', input)

console.log(powerDigitSum(input))
