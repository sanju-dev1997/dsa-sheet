let arr = [13, 46, 24, 52, 20, 9];

Array.prototype.bubbleSort = function () {
  let array = this;
  for (let i = 0; i < array.length - 1; i++) {
    let didSwap = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] >= array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        didSwap = true;
      }
    }
    if (!didSwap) {
      break;
    }
  }
  return array;
};

arr.bubbleSort();
console.log(arr);
