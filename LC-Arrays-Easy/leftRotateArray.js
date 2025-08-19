//Left Rotate an array by one place

//Input: nums = [1, 2, 3, 4, 5]
//Output: [2, 3, 4, 5, 1]

function leftRotateArrayByOnePlace(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  return arr;
}

let result = leftRotateArrayByOnePlace([1, 2, 3, 4, 5]);
console.log(result);

function leftRotateArrayByKtimes(arr, k) {
  let n = arr.length;
  k = k % n;

  //better
  //SC : O(K)
  //TC : O(k) + O(N-K) + O(K) = O(k+N)
  let temp = new Array(k).fill(0);
  for (let i = 0; i < temp.length; i++) {
    temp[i] = arr[i];
  }
  for(let i=k;i<arr.length;i++){
    arr[i-k] = arr[i]
  }
  for(let i=n-k;i<n;i++){
    arr[i] = temp[i-(n-k)]
  }
  return arr

  //optimal  k=2
  //SC : O(1)
  //TC : O(N) + O(K) + O(N-K) = O(2N)
  //1 2 3 4 5 6
  //6 5 4 3 2 1
  //3 4 5 6 1 2
}

let result2 = leftRotateArrayByKtimes([1,2,3,4,5],2)
console.log(result2)
