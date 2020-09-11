const containsCloseNums = (a: number[], k: number): boolean => {
  let indices: number[] = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (i != j && a[i] == a[j]) {
        indices.push(i);
      }
    }
  }
  return Math.abs(indices[1] - indices[0]) <= k;
};

// Test
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3)); // true
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2)); // false
