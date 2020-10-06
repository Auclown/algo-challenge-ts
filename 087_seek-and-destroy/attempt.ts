const seekAndDestroy = (a1: number[], a2: number[]): number[] => {
  return a1.filter((num) => !a2.includes(num));
};

// Test
console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5])); // [1]
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3])); // [1, 5, 1]
