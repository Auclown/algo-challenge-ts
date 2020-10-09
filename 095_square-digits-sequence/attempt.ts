const squareDigitsSequence = (n: number): number => {
  let count: number = 1;

  const uniqueNums = [n];

  while (true) {
    count++;
    n = digitPower(n);

    if (uniqueNums.includes(n)) {
      return count;
    }

    uniqueNums.push(n);
  }
};

const digitPower = (n: number) => {
  const digits = n
    .toString()
    .split("")
    .map((element) => parseInt(element) ** 2);
  const sum = digits.reduce((a, b) => a + b);

  return sum;
};

// Test
console.log(squareDigitsSequence(103)); // 4
