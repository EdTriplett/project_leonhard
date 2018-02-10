/*
Longest Collatz sequence
Problem 14

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

*/

let collatzIteration = (num) => num%2 ? num*3+1 : num/2

let longestCollatzSequence = (maxStart) => {
  let cache = new Array(maxStart + 1)
  for (let i = 2; i <= maxStart; i++) {
    let num = i, count = 1
    while (num >= i) {
      num = collatzIteration(num)
      count += 1
    }
    cache[i] = cache[num] ? count + cache[num] - 1 : count
  }
  console.log(Math.max(cache))
  return cache.indexOf(Math.max(cache))
}

// NOT passing
console.log(longestCollatzSequence(1000000))
