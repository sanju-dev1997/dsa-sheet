function checkIfPowOfTwo(num) {
  if ((num & (num - 1)) == 0) return true;
  return false;
}

console.log(checkIfPowOfTwo(8));
console.log(checkIfPowOfTwo(12));
