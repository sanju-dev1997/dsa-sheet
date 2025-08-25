let N = 5;
let arr = [2, 6, 5, 8, 11];
let target = 14;
//O/P = [1,3]

//Brute force is 2 loops approach
// SC - O(1)
// TC - O(N^2)

//Better
//1) Sort the array and use 2 pointers (Only if Yes or No as O/P)
// SC - O(1)
// TC - O(NlogN + O(N))

//2) Sort the array and use 2 pointers (If Indexes) then store non premitives {index:0,value:2}...in array
// SC - O(N)
// TC - O(N + NlogN + N) - O(2N + NlogN)

//Optimal
// SC - O(N)
// TC - O(N)
function twoSum(N, arr, target) {
  let obj = {};
  for (let i = 0; i < N; i++) {
    let diff = Math.abs(target - arr[i]);
    if (obj[diff] !== undefined) {
      return [obj[diff], i];
    }
    obj[arr[i]] = i;
  }
  return [-1, -1];
}
console.log(twoSum(N, arr, target));
