const compareIntegers = (s1: string, s2: string): string => {
  const num1: number = parseInt(s1);
  const num2: number = parseInt(s2);

  if (num1 > num2) {
    return "greater";
  }

  if (num1 < num2) {
    return "less";
  }

  if (num1 == num2) {
    return "equal";
  }
};

// Test
console.log(compareIntegers("12", "13")); // less
console.log(compareIntegers("875", "799")); // greater
console.log(compareIntegers("1000", "1000")); // equal
