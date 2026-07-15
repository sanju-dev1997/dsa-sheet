//TC = O(nlogn) + O(N^4)
//SC = O(N) + O(N)
function brute() {
  let ans = new Set();
  nums.sort((a, b) => a - b);
  let n = nums.length;
  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      for (let k = j + 1; k < n - 1; k++) {
        for (let l = k + 1; l < n; l++) {
          let sum = nums[i] + nums[j] + nums[k] + nums[l];
          if (sum === target) {
            ans.add([nums[i], nums[j], nums[k], nums[l]].join(","));
          }
        }
      }
    }
  }
  return Array.from(ans).map((el) => el.split(",").map(Number));
}

//TC = O(NlogN) + O(N^3)
//SC = O(quadSize) * 2 + O(N) (For object)
function better() {
  let ans = new Set();
  nums.sort((a, b) => a - b);
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let obj = {};
      for (let k = j + 1; k < n; k++) {
        let reqSum = target - (nums[i] + nums[j] + nums[k]);
        if (obj[reqSum] != undefined) {
          ans.add([nums[i], nums[j], nums[k], reqSum].join(","));
        }
        obj[nums[k]] = 1;
      }
    }
  }
  return Array.from(ans).map((el) => el.split(",").map(Number));
}

//TC - O(N^3)
//SC - O(quads)
function optimal() {
  let n = nums.length;
  nums.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) {
        continue;
      }
      let start = j + 1;
      let end = n - 1;
      while (start < end) {
        let sum = nums[i] + nums[j] + nums[start] + nums[end];
        if (sum === target) {
          ans.push([nums[i], nums[j], nums[start], nums[end]]);
          start++;
          end--;
          while (start < n && nums[start] === nums[start - 1]) {
            start++;
          }
          while (end > j + 1 && nums[end] === nums[end + 1]) {
            end--;
          }
        } else if (sum < target) {
          start++;
        } else {
          end--;
        }
      }
    }
  }
  return ans;
}
