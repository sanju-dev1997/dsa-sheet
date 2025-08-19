//Find missing number in an array

let arr = [1];

//4

//Brute
// TC : O(N^2)
// SC : O(1)
function brute(arr) {
  let n = arr.length;
  for (let i = 1; i <= n + 1; i++) {
    let flag = false;
    for (let j = 0; j < n; j++) {
      if (i === arr[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      return i;
    }
  }
}
let br = brute(arr);
console.log(br);

//Better
//TC : O(2N)
//SC : O(1)
function better(arr) {
  let n = arr.length + 1;
  let hashing = new Array(n+1).fill(0);
  for (let i = 0; i < n - 1; i++) {
    hashing[arr[i]]++;
  }
  for (let i = 1; i <= n; i++) {
    if (hashing[i] === 0) {
      return i;
    }
  }
  return -1
}

let be = better(arr);
console.log(be);

//Optimal
// TC : O(N)
// SC : O(1)
function optimal1(arr) {
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  for (let i = 0; i < n - 1; i++) {
    sum -= arr[i];
  }
  return sum;
}

let o1 = optimal1(arr);
console.log(o1);

function optimal2(arr) {
  let n = arr.length + 1;
  let xor1 = 1;
  let xor2 = arr[0];

  for (let i = 2; i <= n; i++) {
    xor1 = xor1 ^ i;
  }
  for (let i = 1; i < n - 1; i++) {
    xor2 = xor2 ^ arr[i];
  }
  return xor1 ^ xor2;
}

let o2 = optimal2(arr);
console.log(o2);
