//Get the minimum and swap

let num = [12, 1, 13];
function selectionSort(num) {
  let nums = [...num];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < min) {
        min = nums[j];
        minIndex = j;
      }
    }
    if (minIndex !== -1) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
  return nums;
}

console.log(selectionSort(num));
