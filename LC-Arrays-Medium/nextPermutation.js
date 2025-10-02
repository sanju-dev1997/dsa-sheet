// Next Permutation
//A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

// Input: nums = [1,2,3]
// Output: [1,3,2]

//Brute
//Sort the array in ascending order.
//Generate all the permutation in an array and return the array in the next index. If current permutation is the last index, then return the 0th index


//Optimal
//TC - O(3N)
//SC - O(1)
var nextPermutation = function (nums) {
    let startIndex = -1
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            startIndex = i
            break
        }
    }

    if (startIndex === -1) {
        nums.reverse()
        return
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[startIndex] < nums[i]) {
            [nums[startIndex],nums[i]] = [nums[i],nums[startIndex]]
            break
        }
    }

    let start = startIndex + 1
    let end = nums.length - 1
    swap(start, end, nums)

    function swap(a, b, arr) {
        while (a <= b) {
            [arr[a], arr[b]] = [arr[b], arr[a]]
            a++
            b--
        }
    }
};