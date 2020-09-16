const extractMatrixColumn = (matrix: number[][], column: number): number[] => {
  let result: number[] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j == column) {
        result.push(matrix[i][j]);
      }
    }
  }

  return result;
};

console.log(
  extractMatrixColumn(
    [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6],
    ],
    2
  )
);
// [1, 0, 3]
