let nums = [4, 1, 2, 1, 2];
let ans = 0;
for (let i = 0; i < nums.length; i++) {
  ans ^= nums[i];
}
console.log(ans);
