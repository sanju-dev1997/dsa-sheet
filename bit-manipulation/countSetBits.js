function countSetBits(num) {
  let count = 0;
  while (num > 1) {
    if ((num & 1) == 1) count += 1;
    num = num >> 1;
  }
  if (num == 1) count += 1;
  return count;
}
