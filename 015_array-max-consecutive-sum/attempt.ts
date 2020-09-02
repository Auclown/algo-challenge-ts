const arrayMaxConsecutiveSum = (a: number[], k: number): number => {
  let maximum: number = 0;

  for (let i = 0; i < a.length; i++) {
    let count = 0;
    let temp = 0;

    while (count < k) {
      temp += a[i + count];
      if (temp > maximum) {
        maximum = temp;
      }
      count++;
    }
  }

  return maximum;
};

// Test
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2)); // 8;
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3)); // 12;
