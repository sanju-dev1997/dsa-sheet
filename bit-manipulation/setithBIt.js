function setIthBit(num, i) {
  console.log(num.toString(2));
  let res = num | (1 << i);
  console.log(res.toString(2));
  return res;
}

console.log(setIthBit(13, 1));
