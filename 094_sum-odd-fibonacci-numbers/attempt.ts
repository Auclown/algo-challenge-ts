const sumOddFibNumbers = (n: number): number => {
  let result: number = 1;
  for (let i = 1; i <= n; i++) {
    if (isFibonacci(i) && i % 2 != 0) {
      result += i;
    }
  }

  return result;
};

// From GeeksForGeeks' Check Number Fibonacci Number example:
// URL: https://www.geeksforgeeks.org/check-number-fibonacci-number/
const isPerfectSquare = (n: number): boolean => {
  const s = Math.floor(Math.sqrt(n));
  return s * s == n;
};

const isFibonacci = (n: number): boolean => {
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
};

// Test
console.log(sumOddFibNumbers(10)); // 10
console.log(sumOddFibNumbers(1000)); // 1785
console.log(sumOddFibNumbers(4000000)); // 4613732
