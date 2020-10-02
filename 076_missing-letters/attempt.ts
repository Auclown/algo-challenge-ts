const missingLetters = (s: string): string => {
  for (let i = 0; i < s.length - 1; i++) {
    if (s.charCodeAt(i + 1) - s.charCodeAt(i) > 1) {
      return String.fromCharCode(s.charCodeAt(i) + 1);
    }
  }
  return undefined;
};

// Test
console.log(missingLetters("abce")) // d
console.log(missingLetters("abcdefghjklmno")) // i
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz")) // undefined