/*
Lattice paths
Problem 15
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

// (a + b) choose b (where b is lesser one ?)  k=b, n=(a+b)

// = (a+b)! / b!* (a+b-b)!

// = (a+b)! / b!*a!

let factorial = num => {
  if (num % 1) {
    console.log("error, only positive integers can be factorialized")
    return "error, only positive integers can be factorialized"
  }
  if (num < 0) {
    console.log("error, only positive integers can be factorialized")
    return "error, only positive integers can be factorialized"
  }
  if (num === 0) {
    return 1
  }
  else {
    return num * factorial(num-1)
  }
}

console.log(latticePathCount(20))
