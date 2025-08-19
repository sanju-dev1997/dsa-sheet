let arr = [2, 2, 5, 5, 20, 30, 30]


let xor = 0

for(let i=0;i<arr.length;i++){
    xor = xor ^ arr[i]
}

console.log(xor)