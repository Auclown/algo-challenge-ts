const largestOfFour = (a: number[][]): number[] => {
  let result: number[] = [];
  for (let i = 0; i < a.length; i++) {
    result.push(Math.max(...a[i]));
  }

  return result;
};

// Test
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
); // [5, 27, 39, 1001]
console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ])
); // [9, 35, 97, 1000000]
