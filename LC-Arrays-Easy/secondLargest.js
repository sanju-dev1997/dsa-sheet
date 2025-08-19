//Second Largest Element in an Array without sorting

let arr = [1,2,8,9,4,10]


//Brute
// SC = O(1)
// TC = O(N^2)

//better
// SC = O(1)
// TC = O(2N)
let max = -1
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i]
    }
}

let secondMax = -1
for(let i=0;i<arr.length;i++){
    if(arr[i]>secondMax&&arr[i]!=max){
      secondMax = arr[i]
    }
}
console.log(secondMax)

//Optimal
//SC = O(1)
//TC = O(N)
let m = arr[0]
let sm = m

for(let i=0;i<arr.length;i++){
    if(arr[i]>m){
        sm = m
        m = arr[i]
    }
    if(arr[i]>sm&&arr[i]!=m){
        sm = arr[i]
    }
}

console.log(sm)