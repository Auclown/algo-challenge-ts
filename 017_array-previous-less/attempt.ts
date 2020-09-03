const arrayPreviousLess = (a: number[]): number[] => {
  let result: number[] = [];

  for (let i = 1; i < a.length; i++) {
    let temp = 0;
    let pointer = 0;

    while (pointer < i) {
      if (a[i] < a[pointer]) {
        temp = a[i];
      } else {
        temp = -1;
      }
      console.log(temp);
      pointer++;
    }
  }

  return result;
};

// Test
console.log(arrayPreviousLess([3, 5, 2, 4, 5])); // [-1, 3, -1, 2, 4]
