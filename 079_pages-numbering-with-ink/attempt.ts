const pagesNumberingWithInk = (
  current: number,
  numOfDigits: number
): number => {
  while (numOfDigits > current.toString().length) {
    numOfDigits -= current.toString().length;

    if (numOfDigits >= current.toString().length) {
      current++;
    }
  }

  return current;
};

// Test
console.log(pagesNumberingWithInk(1, 5)); // 5
console.log(pagesNumberingWithInk(21, 5)); // 22
console.log(pagesNumberingWithInk(8, 4)); // 10
