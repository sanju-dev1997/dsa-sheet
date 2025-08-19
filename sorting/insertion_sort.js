let arr = [13, 46, 24, 52, 20, 9];

Array.prototype.insertionSort = function () {
  let array = this;
  for (let i = 0; i <= array.length - 1; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      j--;
    }
  }
  return array;
};

arr.insertionSort();
console.log(arr);
