const fermactor = (n: number): number[] => {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < i; j++) {
      const total = Math.pow(i, 2) - Math.pow(j, 2);

      if (total == n) {
        return [i, j];
      }
    }
  }
};

// Test
console.log(fermactor(15)); // [4, 1]
