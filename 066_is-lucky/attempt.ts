const isLucky = (n: number): boolean => {
  const stringNum: string = n.toString();
  const half: number = stringNum.length / 2;
  let firstHalf: number = 0;
  let secondHalf: number = 0;

  for (let i = 0; i < stringNum.length; i++) {
    if (i < half) {
      firstHalf += parseInt(stringNum[i]);
    } else if (i >= half) {
      secondHalf += parseInt(stringNum[i]);
    }
  }

  return firstHalf == secondHalf;
};

// Test
console.log(isLucky(1230)); // true
console.log(isLucky(239017)); // false
