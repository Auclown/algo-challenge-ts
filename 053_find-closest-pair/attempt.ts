const findClosestPair = (a: number[], sum: number): number => {
  let result: number = -1;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length - 1; j++) {
      let current = Math.abs(i - j);

      if (a[i] + a[j] == sum) {
        if (result == -1 || current < result) {
          result = current;
        }
      }
    }
  }

  return result;
};

// Test
console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5)); // 2
console.log(findClosestPair([2, 3, 7], 8)); // -1
