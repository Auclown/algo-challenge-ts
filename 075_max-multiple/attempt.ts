const maxMultiple = (divisor: number, bound: number): number => {
  return Math.floor(bound / divisor) * divisor;
};

// Test
console.log(maxMultiple(3, 10)); // 9
console.log(maxMultiple(5, 10)); // 10