const firstDigit = (s: string): string => {
  const toIterate = s.split("");
  for (let i = 0; toIterate.length; i++) {
    if (/^\d+$/.test(toIterate[i])) {
      return toIterate[i];
    }
  }
};

// Test
console.log(firstDigit("var_1__Int")); // 1
console.log(firstDigit("q2q-q")); // 2
console.log(firstDigit("0ss")); // 0
