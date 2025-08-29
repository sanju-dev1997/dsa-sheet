let nums = [2, 2, 1, 1, 1, 2, 2];

//Brute
//TC - O(N^2)
//SC - O(1)
function brute() {
  let targetCount = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (el === nums[j]) {
        count++;
      }
    }
    if (count > targetCount) return el;
  }
}

//Better
//TC  - O(2N) || O(N + NlogN)
//SC - O(N)
function better() {
  let targetCount = Math.floor(nums.length / 2);
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }
  for (let key in obj) {
    if (obj[key] > targetCount) return +key;
  }
}

//Optimal
//TC - O(2N)
//SC - O(1)
function optimal() {
  let targetCount = Math.floor(nums.length / 2);
  let majorityElement = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count <= 0) {
      majorityElement = nums[i];
      count = 0;
    }
    if (nums[i] === majorityElement) {
      count++;
    } else {
      count--;
    }
  }
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === majorityElement) {
      c++;
    }
  }
  if (c > targetCount) return majorityElement;
}