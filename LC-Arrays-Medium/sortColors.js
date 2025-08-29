let nums = [2, 0, 2, 1, 1, 0, 1];
//Better
// TC - O(2N)
// SC - O(1)
let count0 = 0;
let count1 = 0;
let count2 = 0;

for (let i = 0; i < nums.length; i++) {
  switch (nums[i]) {
    case 0:
      count0++;
      break;
    case 1:
      count1++;
      break;
    case 2:
      count2++;
      break;
  }
}

for (let i = 0; i < count0; i++) {
  nums[i] = 0;
}

for (let i = count0; i < count1 + count0; i++) {
  nums[i] = 1;
}

for (let i = count0 + count1; i < count0 + count1 + count2; i++) {
  nums[i] = 2;
}

console.log(nums);

//Optimal - Dutch National Flag
// TC - O(N)
// SC - O(1)
let n = nums.length;
let l = 0;
let m = 0;
let h = n - 1;
while (m <= h) {
  if (nums[m] === 0) {
    [nums[m], nums[l]] = [nums[l], nums[m]];
    l++;
    m++;
  } else if (nums[m] === 1) {
    m++;
  } else {
    [nums[m], nums[h]] = [nums[h], nums[m]];
    h--;
  }
}
