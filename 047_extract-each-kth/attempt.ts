const extractEachKth = (a: number[], k: number): number[] => {
  return a.filter((value, index, a) => index != k - 1);
};

// Test
console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // [1, 2, 4, 5, 7, 8, 10]
