// Subarray Sum Equals K
//Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.
//Input: nums = [1,1,1], k = 2
//Output: 2

//Brute
//TC = O(N^3)
//SC = O(1)
var brute = function (nums, k) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
      }
      if (sum === k) {
        ans++;
      }
    }
  }
  return ans;
};

//Better
//TC = O(N^2)
//SC = O(1)
var better = function (nums, k) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        ans++;
      }
    }
  }
  return ans;
};

//Optimal
//TC = O(N)
//SC = O(N)
var optimal = function (nums, k) {
    let ans = 0
    let map = {}
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum === k) {
            ans++
        }
        let reqSum = sum - k
        if (map[reqSum] !== undefined) {
            ans += map[reqSum]
        }
        if (map[sum] === undefined) {
            map[sum] = 1
        } else {
            map[sum]++
        }
    }
    return ans
};
