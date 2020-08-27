function aepAttempt(a: number[]): number {
  let result = 0;
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] * a[i + 1] > result) {
      result = a[i] * a[i + 1];
    }
  }
  return result;
}

// Test
console.log(aepAttempt([3, 6, -2, -5, 7, 3])); // 21
console.log(aepAttempt([0, 2, 4, 10, 1, 5])); // 40
