/**
 * Write a function, SumMaxK, that gets two arguments:
 * Int[] ar: Array of integers, where all the numbers within the array are between 1-9 (inclusive) 
 * Int K, where K > 0 and K <= length(ar)
 * The function should calculate the maximum sum that you can construct by using K 
 * numbers from the array ar. You should write a solution that has the best possible 
 * complexity in time and space
 * 
 * Example scenario:
 * SumMaxK (ar, K) if the input is:
 * ar = [3, 5, 3, 2, 7, 6, 4, 9, 1, 8, 2, 1, 2, 7]
 * K = 3
 * The function will return 24 (7+9+8)
 */

const sumMaxK = (ar, K) => {
  let maxSum = 0;
  ar.sort((a, b) => b - a);

  for (let i = 0; i < K; i++) {
    maxSum += ar[i];
  }

  return maxSum;
}


module.exports = {
  sumMaxK,
};
