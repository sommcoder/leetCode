/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (!x) return x; // if zero?

  // a binary search implementation
  // think of the phone book analogy
  // works by repeatedly NARROWING down the range of possible answers until the sqrt is found or the closets integer value is determined.
  let left = 1; // lower boundary, 0
  let right = Math.floor(x / 2) + 1;
  let mid; // keep cutting in half

  while (left <= right) {
    mid = Math.floor((left + right) / 2); // get the average
    // the mid is our "current guess" for the sqrt
    if (mid * mid > x) {
      // if too high:
      right = mid - 1;
    } else if (mid * mid < x) {
      // if too low:
      left = mid + 1;
    } else {
      // if sqrt, return it:
      return mid;
    }
  }
  // the tricky point is that we will return right if there is no square root found.

  // the reason is the square root is between [n-1, n] and we can know that when while is false, right must be n-1
  return right;
  // if x is NOT a perfect square. right represents the largest integer whose SQUARE is less than or equal to x, effectively ROUNDING DOWN the actual sqrt.
};
