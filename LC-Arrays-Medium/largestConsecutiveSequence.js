let nums = [100, 4, 200, 1, 3, 2];
let n = nums.length;
//O/P = 4

//Brute
//TC = O(N^2)
//SC = O(1)
function brute(nums, n) {
  let max = 1;
  for (let i = 0; i < n; i++) {
    let count = 1;
    let next = nums[i] + 1;
    while (nums.includes(next)) {
      next++;
      count++;
    }
    max = Math.max(count, max);
  }
  console.log(`Brute : ${max}`);
}

brute(nums, n);

//Better

//Optimal
