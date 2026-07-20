let a = 5;
let b = 6;

function swap(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return { a, b };
}

console.log(swap(a, b));
