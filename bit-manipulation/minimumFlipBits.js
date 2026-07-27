var minBitFlips = function (start, goal) {
  let res = start ^ goal;
  let count = 0;
  while (res > 0) {
    res = res & (res - 1);
    count += 1;
  }
  return count;
};
