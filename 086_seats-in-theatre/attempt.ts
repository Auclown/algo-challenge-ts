const seatsInTheatre = (
  nCols: number,
  nRows: number,
  col: number,
  row: number
): number => {
  return (nCols - col + 1) * (nRows - row);
};

// Test
console.log(seatsInTheatre(16, 11, 5, 3)); // 96
