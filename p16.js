/*
Power digit sum
Problem 16
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

let stringMultiply = (numStr1, numStr2) => {
  // takes string args, returns string
  let digit, temp, carry = 0, product = ''
  while (numStr1.length) {
    digit =  Number(numStr1.slice(-1))
    numStr1 = numStr1.slice(0, numStr1.length-1)
    temp = digit * Number(numStr2) + carry
    carry = Math.floor(temp/10)
    product = (temp%10).toString().concat(product)
  }
  product = carry ? carry.toString().concat(product) : product
  return product
}

let stringPowerOfTwo = num => {
  // return a string representing 2 raised to the power of the integer num
  let iterCount = 0, product = '1'
  while (iterCount < num) {
    iterCount += 1
    product = stringMultiply(product, '2')
  }
  return product
}

let stringDigitSum = numStr => {
  let sum = 0
  while (numStr.length) {
    sum += Number(numStr.slice(-1))
    numStr = numStr.slice(0, numStr.length-1)
  }
  return sum
}

console.log(stringDigitSum(stringPowerOfTwo(1000)))
