const alphabetSubSequence = (s: string): boolean => {
  let counter = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s.charCodeAt(i) >= s.charCodeAt(i + 1)) {
      counter++;
    }
  }

  return counter < 1;
};

// Test
console.log(alphabetSubSequence("effg")); // false
console.log(alphabetSubSequence("cdce")); // false
console.log(alphabetSubSequence("ace")); // true
console.log(alphabetSubSequence("bxz")); // true
