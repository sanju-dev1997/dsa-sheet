let arr = [3, 1, 2, 4, 1, 5, 2, 6, 4];
function mergeSort(arr) {
  function sort(arr, l, r) {
    if (l >= r) {
      return arr;
    }
    let mid = Math.floor((l + r) / 2);
    sort(arr, l, mid);
    sort(arr, mid + 1, r);
    return merge(arr, l, mid, r);
  }
  return sort(arr, 0, arr.length - 1);
}

function merge(arr, l, m, r) {
  console.log(l, m, r);
  let mergedArr = [];
  let i = l;
  let j = m + 1;
  while (i <= m && j <= r) {
    if (arr[i] <= arr[j]) {
      mergedArr.push(arr[i]);
      i++;
    } else {
      mergedArr.push(arr[j]);
      j++;
    }
  }
  while (i <= m) {
    mergedArr.push(arr[i]);
    i++;
  }
  while (j <= r) {
    mergedArr.push(arr[j]);
    j++;
  }
  for (let k = l; k <= r; k++) {
    arr[k] = mergedArr[k - l];
  }
  console.log(mergedArr, arr);
  return arr;
}

console.log(mergeSort(arr));
