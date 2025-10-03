//Pascal Triangle

//There are multiple variants to this problem.

//1. Find the element at particular row,col
//Say row=5 and col=3
//o/p = 6

function findElement(row, col) {
  let rowStart = row - 1;
  let colStart = col - 1;
  let nr = 1;
  let dr = 1;
  for (let i = 0; i < col - 1; i++) {
    nr *= rowStart - i;
    dr *= colStart - i;
  }
  return Math.round(nr / dr);
}

//2. Find the row particular row
//Say row=5
function findRowElements(row) {
    let result = []
    let ans = 1
    result.push(ans)
    for (let i = 1; i < row; i++) {
        ans *= row - i
        ans /= i
        result.push(ans)
    }
    return result
}

//3. Generate the entire pascal triangle given number of rows

var generate = function (numRows) {
  let ans = new Array(numRows).fill(1);
  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1).fill(1);
    for (let j = 0; j < row.length; j++) {
      row[j] = findElement(i + 1, j + 1);
    }
    ans[i] = row;
  }

  function findElement(row, col) {
    let rowStart = row - 1;
    let colStart = col - 1;
    let nr = 1;
    let dr = 1;
    for (let i = 0; i < col - 1; i++) {
      nr *= rowStart - i;
      dr *= colStart - i;
    }
    return Math.round(nr / dr);
  }
  return ans;
  
};
