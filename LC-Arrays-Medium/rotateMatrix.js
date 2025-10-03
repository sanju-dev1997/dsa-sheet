//Rotate Image
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

let matrix = [[1,2,3],[4,5,6],[7,8,9]]

//Brute : Create a matrix of same size of given input. Then traverse the given matrix from 1st col bottom row. Then replace the elements from new matrix created




//Optimal
//TC - O(N*M + N*M) = O(2MN)
//SC - O(1)
var optimal = function (matrix) {
    let row = matrix.length
    let col = matrix[0].length
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i > j) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
    }

    for (let i = 0; i < row; i++) {
        let start = 0;
        let end = col - 1
        while (start <= end) {
            [matrix[i][start], matrix[i][end]] = [matrix[i][end], matrix[i][start]]
            start++
            end--
        }
    }
};