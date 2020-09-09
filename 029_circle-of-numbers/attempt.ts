const circleOfNumbers = (n: number, firstNumber: number): number => {
  const numbers: number[] = [];

  for (let i = 0; i < n; i++) {
    numbers.push(i);
  }

  if (firstNumber < n / 2) {
    return numbers[firstNumber + n / 2];
  }

  return numbers[firstNumber - n / 2];
};
