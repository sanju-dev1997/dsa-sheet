let arr = [4, 6, 2, 5, 7, 9, 1, 3];

function quickSort(arr, l, h) {
  if (l < h) {
    let partitionIndex = findPartitionIndex(arr, l, h);
    quickSort(arr, l, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, h);
    return arr;
  }
}

function findPartitionIndex(arr, l, h) {
  let i = l;
  let j = h;
  let pivot = l;
  while (i < j) {
    while (arr[i] <= arr[pivot] && i <= h) {
      i++;
    }
    while (arr[j] > arr[pivot] && j >= l) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[j], arr[pivot]] = [arr[pivot], arr[j]];
  return j;
}

let ans = quickSort(arr, 0, arr.length - 1);
console.log(ans);
