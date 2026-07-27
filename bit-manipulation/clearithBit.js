function clearithBit(num, i) {
  console.log(num.toString(2));
  let res = num & ~(1 << i);
  console.log(res.toString(2));
  return res;
}

console.log(clearithBit(13, 2));
