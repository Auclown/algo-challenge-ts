const arrayPreviousLess = (a: number[]): number[] => {
  let result: number[] = [];

  for (let i = 1; i < a.length; i++) {
    let temp = 0;
    let count = 0;

    while (count < a.length) {
      result[i] = a[i];
      count++;
    }
  }

  return result;
};

// Test
console.log(arrayPreviousLess([3, 5, 2, 4, 5])); // [-1, 3, -1, 2, 4]
