const crossingSum = (m: number[][], a: number, b: number): number => {
  let rowSum: number = 0;
  let colSum: number = 0;
  
  for (let i = 0; i < m.length; i++) {
    rowSum += m[a][i];
    colSum += m[i][b];
  }

  return rowSum + colSum;
};

// Test
console.log(
  crossingSum(
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3],
    ],
    1,
    3
  )
); // 12
