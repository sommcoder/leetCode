/*
function takes in two arguments a low and a high non-negative number

meaning low HAS to be at least 1!

return the COUNT of odd numbers between low and high
*/

var countOdds = function (low, high) {
  if (low % 2 == 0 && high % 2 == 0) return Math.ceil((high - low) / 2);
  else return Math.ceil((high - low) / 2) + 1;
};
