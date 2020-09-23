const firstDuplicate = (a: number[]): number => {
  const numbers = {};

  for (let num of a) {
    if (numbers.hasOwnProperty(num)) {
      return num;
    }
    numbers[num] = num;
  }

  return -1;
};

// Test
console.log(firstDuplicate([2, 1, 3, 5, 3, 2])); // 3
console.log(firstDuplicate([2, 4, 3, 5, 1])); // -1
