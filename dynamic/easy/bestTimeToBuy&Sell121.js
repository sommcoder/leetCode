/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  // we can't sell before we buy so therefore it's okay that our right pointer (sell) begins on the 2nd[1] index!
  let left = 0; // Buy pointer
  let right = 1; // sell pointer
  let max_profit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};

// another solution:

var maxProfit1 = function (prices) {
  if (prices.length < 2) {
    return 0;
  }

  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
};
