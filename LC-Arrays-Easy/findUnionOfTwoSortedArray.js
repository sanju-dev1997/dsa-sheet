//You are given two arrays a[] and b[], return the Union of both the arrays in any order.

//The Union of two arrays is a collection of all distinct elements present in either of the arrays. If an element appears more than once in one or both arrays, it should be included only once in the result.

//Note: Elements of a[] and b[] are not necessarily distinct.


//SortedArray
function findUnion(a, b) {
    // code here
    let ans = []
    let p1 = 0
    let p2 = 0
    let n1 = a.length
    let n2 = b.length
    while(p1<n1&&p2<n2){
        if(a[p1]<=b[p2]){
            if(ans[ans.length-1]!==a[p1]){
                ans.push(a[p1])
            }
            p1++
        }else{
            if(ans[ans.length-1]!==b[p2]){
                ans.push(b[p2])
            }
            p2++
        }
    }
    while(p1<n1){
       if(ans[ans.length-1]!==a[p1]){
                ans.push(a[p1])
            }
            p1++ 
    }
    while(p2<n2){
        if(ans[ans.length-1]!==b[p2]){
                ans.push(b[p2])
            }
            p2++
    }
    return ans
}
