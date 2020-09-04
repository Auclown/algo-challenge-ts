const arrayReplace = (a: number[], b: number, c: number): number[] => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] == b) {
      a[i] = c;
    }
  }

  return a;
};

// Test
console.log(arrayReplace([1, 2, 1], 1, 3)); // [3, 2, 3];
console.log(arrayReplace([1, 1, 1], 1, 3)); // [3, 3, 3];
console.log(arrayReplace([2, 2, 2], 2, 1)); // [1, 1, 1];
console.log(arrayReplace([1, 2, 1], 2, 3)); // [1, 3, 1];
