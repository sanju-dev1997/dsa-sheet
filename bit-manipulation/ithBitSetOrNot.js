function checkIfIthBitIsSetOrNot(num, i) {
  let res = num & (1 << i);
  if (res > 0) return true;
  return false;
}

console.log(checkIfIthBitIsSetOrNot(13, 2));
console.log(checkIfIthBitIsSetOrNot(13, 1));
