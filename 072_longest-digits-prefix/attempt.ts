const longestDigitsPrefix = (s: string) => {
  return s.split(/(\d+)/)[1];
};

// Test
console.log(longestDigitsPrefix("123aa1")); // 123
console.log(longestDigitsPrefix("5dc1")); // 5
console.log(longestDigitsPrefix("4748629a")); //4748629
