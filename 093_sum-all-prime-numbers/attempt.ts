const sumAllPrimeNumbers = (n: number): number => {
  let result: number = 0;

  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      result += i;
    }
  }

  return result;
};

const isPrime = (n: number): boolean => {
  if (n == 1) {
    return false;
  } else if (n == 2) {
    return true;
  }

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

// Test
console.log(sumAllPrimeNumbers(10)); // 17
console.log(sumAllPrimeNumbers(977)); // 73156
