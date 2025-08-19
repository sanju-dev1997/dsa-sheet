//Brute force will be to simply generate all the subarray and check the length and sum

//Positives
let arr = [10, 5, 2, 7, 1, 10];
let k = 15;
//  o/p = 4 (5,2,7,1)

let low = 0;
let sum = arr[0];
let max = 0;
let right = 0;
while (right < arr.length) {
  while (sum > k && low <= right) {
    sum -= arr[low];
    low++;
  }
  if (sum === k) {
    max = Math.max(max, right - low + 1);
  }
  right++;
  if (right < arr.length) {
    sum += arr[right];
  }
}
console.log(max);

//Both positive and negatives
let a = [10, 5, 2, 7, 1, 7];
let map = new Map();
let m = 0;
let s = 0
for (let i = 0; i < a.length; i++) {
  s += a[i];
  if (s === k) {
    m = Math.max(i + 1, m);
  }
  else if (map.has(s - k)) {
    m = Math.max(i - map.get(s - k), m);
  }
  if (!map.has(s)) {
    map.set(s, i);
  }
}
console.log(m);
