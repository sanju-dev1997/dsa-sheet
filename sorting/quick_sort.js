let arr = [4, 6, 2, 5, 7, 9, 1, 3];
function quickSort(arr, l, h) {
  if (l >= h) {
    return arr;
  }
  let pI = placePivot(arr, l, h);
  quickSort(arr, l, pI - 1);
  quickSort(arr, pI + 1, h);
  return arr;
}

function placePivot(arr, l, h) {
  let partitionIndex = -1;
  let pivot = arr[l];
  let i = l;
  let j = h;
  while (i < j) {
    while (arr[i] <= pivot && i <= h) {
      i++;
    }
    while (arr[j] > pivot && j >= l) {
      j--;
    }
    if (i > j) {
      [arr[j], arr[l]] = [arr[l], arr[j]];
      partitionIndex = j;
      break;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return partitionIndex;
}

console.log(quickSort(arr, 0, arr.length - 1));
