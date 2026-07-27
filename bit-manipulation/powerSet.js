var subsets = function (nums) {
  let ans = [];
  let n = nums.length;
  for (let i = 0; i < Math.pow(2, n); i++) {
    let subSet = [];
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) > 0) {
        subSet.push(nums[j]);
      }
    }
    ans.push(subSet);
  }
  return ans;
};
