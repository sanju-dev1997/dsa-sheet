let nums = [-2, 1, 2, -5, 2, -4];
//Output: [3,-2,1,-5,2,-4]

//Brute
//TC - O(N + N/2)
//SC - O(N)
function brute(nums) {
  let pos = new Array(nums.length / 2);
  let neg = new Array(nums.length / 2);
  let posCounter = 0;
  let negCounter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      neg[negCounter] = nums[i];
      negCounter++;
    } else {
      pos[posCounter] = nums[i];
      posCounter++;
    }
  }
  for (let i = 0; i < nums.length / 2; i++) {
    nums[2 * i] = pos[i];
    nums[2 * i + 1] = neg[i];
  }
  console.log(nums);
}

//Optimal
//TC - O(N)
//SC - O(N)
function optimal(nums) {
  let ans = new Array(nums.length).fill(0);
  let posCounter = 0;
  let negCounter = 1;
  let start = 0;
  while (start < nums.length) {
    if (nums[start] <= 0) {
      ans[negCounter] = nums[start];
      negCounter += 2;
    } else {
      ans[posCounter] = nums[start];
      posCounter += 2;
    }
    start++;
  }
  console.log(ans);
}
optimal(nums);
