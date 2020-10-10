const sumOfTwo = (a: number[], b: number[], v: number): boolean => {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] + b[j] == 42) {
        return true;
      }
    }
  }
  return false;
};

// Test
console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42)); // true
