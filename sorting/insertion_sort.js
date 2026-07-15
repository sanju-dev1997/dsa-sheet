let arr = [13, 46, 24, 52, 20, 9];

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let curr = i;
    while (curr > 0 && nums[curr - 1] > nums[curr]) {
      [nums[curr], nums[curr - 1]] = [nums[curr - 1], nums[curr]];
      curr--;
    }
  }
}

insertionSort(arr);
console.log(arr);
