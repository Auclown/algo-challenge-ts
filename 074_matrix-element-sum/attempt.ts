const matrixElementSum = (matrix: number[][]): number => {
  let result: number = 0;
  const hauntedIndices: number[] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        hauntedIndices.push(j);
      } else if (! hauntedIndices.includes(j)) {
        result += matrix[i][j];
      }
    }
  }

  return result;
};

// Test
console.log(
  matrixElementSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
); // 9
