const factorializeANumber = (n: number): number => {
  if (n < 1) {
    return 1;
  }

  return n * factorializeANumber(n - 1);
};

console.log(factorializeANumber(5)); // 120
console.log(factorializeANumber(10)); // 3628800
