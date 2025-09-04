let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//O/P - 6

//Brute - generate all subarray (contigues sub array)
//TC - O(N^2)
//SC - O(N)

//Kadens Algo
//Going forward don't take negative sum because, it will always tend to decrease the sum in the next iteration
let max = -Infinity;
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  max = Math.max(sum, max);
  if (sum <= 0) {
    sum = 0;
  }
}
console.log(max);
