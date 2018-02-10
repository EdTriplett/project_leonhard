/*
Lattice paths
Problem 15
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

// 6 = 2^1 + 2^2
// #ofPaths = sum of 2^(series of numbers 1...lengthOfSide)

let latticePathCount = (lengthOfSide) => {
  let count = 0
  for (let i = 1; i<=lengthOfSide; i++){
    count += Math.pow(2, i)
  }
  return count
}
//NOT passing yet
console.log(latticePathCount(20))
