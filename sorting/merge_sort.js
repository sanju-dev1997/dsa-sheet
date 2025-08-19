let arr = [3, 1, 2, 4, 1, 5, 2, 6, 4];

Array.prototype.mergeSort = function () {
  let arr = this;

  function sort(arr, low, high) {
    if (low >= high) {
      return;
    }
    let mid = Math.floor(low + (high - low) / 2);
    sort(arr, low, mid);
    sort(arr, mid + 1, high);
    mergeArray(arr, low, mid, high);
    return arr;
  }
  return sort(arr, 0, arr.length - 1);

  function mergeArray(arr, low, mid, high) {
    let p1 = low;
    let p2 = mid + 1;
    let mergedArray = [];
    while (p1 <= mid && p2 <= high) {
      if (arr[p1] <= arr[p2]) {
        mergedArray.push(arr[p1]);
        p1++;
      } else if (arr[p2] < arr[p1]) {
        mergedArray.push(arr[p2]);
        p2++;
      }
    }
    while (p1 <= mid) {
      mergedArray.push(arr[p1]);
      p1++;
    }
    while (p2 <= high) {
      mergedArray.push(arr[p2]);
      p2++;
    }
    for (let i = low; i <= high; i++) {
      arr[i] = mergedArray[i - low];
    }
  }
};

let sorted = arr.mergeSort();
console.log(sorted);
