let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]


//TC - O(N + (M*N) + M*N(M+N) + O(M*N))
//SC - O(N^2)
function brute(matrix) {
  let n = matrix.length
  let m = matrix[0].length
  let copyMatrix = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    copyMatrix[i] = new Array(m).fill(0)
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      copyMatrix[i][j] = matrix[i][j]
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        updateRowCol(i, j)
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      matrix[i][j] = copyMatrix[i][j]
    }
  }

  function updateRowCol(row, col) {
    for (let i = 0; i < n; i++) {
      copyMatrix[row][i] = 0
    }
    for (let j = 0; j < m; j++) {
      copyMatrix[j][col] = 0
    }
  }
}

brute(matrix)

function better(matrix) {
  let n = matrix.length
  let m = matrix[0].length
  let row = new Array(n).fill(1)
  let col = new Array(m).fill(1)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        row[i] = 0
        col[j] = 0
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] === 0 || col[j] === 0) {
        matrix[i][j] = 0
      }
    }
  }
}

better(matrix)

function optimal(matrix) {
  let col0 = 1
  let n = matrix.length
  let m = matrix[0].length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        if (j == 0) {
          col0 = 0
        } else {
          matrix[0][j] = 0
        }
      }
    }
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0
      }
    }
  }
  for (let j = 0; j < m; j++) {
    if (matrix[0][0] == 0) {
      matrix[0][j] = 0
    }
  }
  if (col0 == 0) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0
    }
  }
}

optimal(matrix)
