//Best Time to Buy and Sell Stock
let prices = [7, 1, 5, 3, 6, 4];

let min = prices[0];
let profit = 0;
for (let i = 1; i < prices.length; i++) {
  let cost = prices[i] - min;
  profit = Math.max(cost, profit);
  min = Math.min(min, prices[i]);
}
console.log(profit);
