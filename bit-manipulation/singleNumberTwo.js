let nums = [2, 2, 3, 2, 3, 3, 8];
//o/p = 3
function appOne(nums) {
  //TC - O(nX31)
  //SC - O(1)
  let singleNum = 0;
  for (let i = 0; i < 32; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] & (1 << i)) {
        count++;
      }
    }
    if (count % 3 != 0) {
      singleNum += 1 * Math.pow(2, i);
    }
  }
  return singleNum;
}

function appTwo(nums) {
  //TC - O(n)
  //SC - O(1)
  let one = 0;
  let two = 0;
  for (let i = 0; i < nums.length; i++) {
    one = (nums[i] ^ one) & ~two;
    two = (nums[i] ^ two) & ~one;
  }
  return one;
}
console.log(appOne(nums));
console.log(appTwo(nums));

