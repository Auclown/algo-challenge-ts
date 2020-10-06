const shapeArea = (n: number): number => {
  let result: number = 1;

  for (let i = 1; i < n; i++) {
    result += 4 * i;
  }

  return result;
};

// Test
console.log(shapeArea(2)); // 5
console.log(shapeArea(3)); // 13
