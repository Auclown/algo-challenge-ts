const arrayMaximalAdjacentDiff = (a: number[]): number => {
  let result: number = 0;

  for (let i = 0; i < a.length - 1; i++) {
    if (Math.abs(a[i] - a[i + 1]) > result) {
      result = Math.abs(a[i] - a[i + 1]);
    }
  }

  return result;
};

console.log(arrayMaximalAdjacentDiff([2, 4, 1, 0])); // 3
console.log(arrayMaximalAdjacentDiff([2, 9, 1, 0])); // 8
