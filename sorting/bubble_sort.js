let arr = [13, 46, 24, 52, 20, 9];

Array.prototype.bubbleSort = function () {
  //n=6
  let n = this.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
      }
    }
  }
};

arr.bubbleSort();
console.log(arr);
