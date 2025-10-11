// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

function brute() {
  let ans = new Set();
  nums.sort((a, b) => a - b);
  let n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          let triplet = [nums[i], nums[j], nums[k]];
          ans.add(triplet.join(","));
        }
      }
    }
  }
  return Array.from(ans).map((t) => t.split(",").map(Number));
}

function better() {
  let ans = new Set([]);
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let obj = {};
    for (let j = i + 1; j < n; j++) {
      let reqEl = -(nums[i] + nums[j]);
      if (obj[reqEl] !== undefined) {
        ans.add([nums[i], nums[j], reqEl].sort((a, b) => a - b).join(","));
      }
      obj[nums[j]] = j;
    }
  }
  return Array.from(ans).map((t) => t.split(",").map(Number));
}

function optimal() {
  let ans = [];
  let n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        ans.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (nums[j] === nums[j - 1]) {
          j++;
        }
        while (nums[k] === nums[k + 1]) {
          k--;
        }
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return ans;
}
