let nums = [100, 4, 200, 1, 3, 2];
let n = nums.length;
//O/P = 4

//Brute
//TC = O(N^2)
//SC = O(1)
function brute(nums, n) {
  let max = 1;
  for (let i = 0; i < n; i++) {
    let count = 1;
    let next = nums[i] + 1;
    while (nums.includes(next)) {
      next++;
      count++;
    }
    max = Math.max(count, max);
  }
  console.log(`Brute : ${max}`);
}

brute(nums, n);

//Better
//TC - O(NlogN + N)
//SC - O(1)
function better(nums,n){
    if (n == 0) {
        return 0
    }
    nums.sort((a, b) => a - b)
    let max = 1;
    let count = 1;
    let prev = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let prevEl = nums[i] - 1;
        if (nums[i] === prev) {
            continue
        }
        else if (prevEl === prev) {
            count++;
            prev++
            max = Math.max(count, max);
        } else if (prevEl !== prev) {
            count = 1;
            prev = nums[i]
            max = Math.max(count, max);
        }
    }
    console.log(`Better : ${max}`);
}

//Optimal
//TC - O(N+2N)
//SC - O(N)
function optimal(nums,n){
    let obj = {};
    for (let i = 0; i < n; i++) {
        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = 0;
        }
    }

    let max = 0;

    for (let key in obj) {
        if (obj[+key - 1] === undefined) {
            let streak = 1;
            let next = +key + 1;
            while (obj[next] !== undefined) {
                streak++;
                next++;
            }
            max = Math.max(streak, max);
        }
    }
    console.log(`Optimal : ${max}`);
}
