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
  let cache = new Array(maxStart + 1), longestSeqCount = 0, longestSeqStart = 0
  cache[1] = 1

  outer : for (let i = 2; i <= maxStart; i++) {
    let num = i, count = 1, memo = {}, memoCount = 0

    inner: while (num >= i) {
      // if (cache[num]) {
      //   break inner
      // }
      count += 1
    //  memoCount -= 1 //will be subtracted from final count of i's Collatz sequence
    //  memo[num.toString()] = memoCount
      num = collatzIteration(num)
      if (num === i) { //goes after first Collatz iteration
        console.log('We found a loop!  Somebody call the Fields committee!  Paul Erdős owes me $500!')
        console.log('The sequence containing the loop begins with ' + i)
        cache[i] = "LOOP!"
        return i
      }
    }

    cache[i] = count + cache[num] - 1
    // Object.keys(memo).forEach(key => {
    //   cache[key] = memo[key] + count
    // })
    if (cache[i] > longestSeqCount) {
      longestSeqCount = cache[i]
      longestSeqStart = i
    }
  }
  return longestSeqStart
}


console.log(longestCollatzSequence(1000000))
