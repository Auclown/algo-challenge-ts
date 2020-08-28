function almostIncreasingSequence(a: number[]): boolean {
  let counter: number = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] <= a[i - 1]) {
      counter++;
      if ((a[i] <= a[i - 2]) &&(a[i + 1] <= a[i - 1])) {
          return false;
      }
    }
  }

  return counter <= 1;
}

// Test
console.log(almostIncreasingSequence([1, 3, 2, 1])); // false
console.log(almostIncreasingSequence([1, 3, 2])); // true
