let arr = [13, 46, 24, 52, 20, 9];

Array.prototype.selectionSort = function () {
  let array = this;
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] <= array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== -1) {
      [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }
  }
  return array;
};

arr.selectionSort();
console.log(arr);
