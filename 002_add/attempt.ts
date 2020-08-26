// 1. Write a function that returns the sum of two numbers.
function addTwo(a: number, b: number): number {
  return a + b;
}

// 2. Write a function that returns the sum of all numbers regardless of # of params.
function addAll(...numbers: number[]): number {
  let result: number = 0;

  numbers.forEach((number) => {
    result += number;
  });

  return result;
}

// Test
console.log(addTwo(1, 2)); // 3
console.log(addTwo(3, 4)); // 7
console.log(addAll(1, 2, 3, 4)); // 10
console.log(addAll(5, 6, 7, 8)); // 26
