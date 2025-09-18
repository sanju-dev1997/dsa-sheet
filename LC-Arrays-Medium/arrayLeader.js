// Input: arr = [16, 17, 4, 3, 5, 2]
// Output: [17, 5, 2]
// Explanation: Note that there is nothing greater on the right side of 17, 5 and, 2.

let arr = [16, 17, 4, 3, 5, 2];

//Brute
//TC - O(N^2)
//SC - O(N)
function brute(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let isLeader = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        isLeader = false;
        break;
      }
    }
    if (isLeader) {
      ans.push(arr[i]);
    }
  }
}

//optimal
//TC - O(N)
//SC - O(N)
function optimal(a) {
  let ans = [a[a.length - 1]];
  for (let i = a.length - 2; i >= 0; i--) {
    if (a[i] >= ans[ans.length - 1]) {
      ans.push(a[i]);
    }
  }
  return ans.reverse();
}
