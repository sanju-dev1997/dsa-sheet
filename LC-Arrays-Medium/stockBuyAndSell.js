let prices = [7, 1, 5, 3, 6, 4];

//Brute
// TC - O(N^2)
// SC - O(1)

function brute(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    let s = i;
    if (i > 0 && prices[i - 1] < prices[i]) {
      while (s >= 0 && prices[s] <= prices[i]) {
        maxProfit = Math.max(maxProfit, prices[i] - prices[s]);
        s--;
      }
    }
  }
  console.log(maxProfit);
}

brute(prices);

function optimal(prices) {
  let maxProfit = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - min);
    min = Math.min(prices[i], min);
  }
  console.log(maxProfit);
}
optimal(prices);
