const pigLatin = (s: string): string => {
  const vowels = /^[aeiou]$/i;

  if (vowels.test(s[0])) {
    return `${s}way`;
  }

  const chars: string[] = s.split("");
  const toPrint: string[] = [];
  let consonantUpTo: number = 0;

  for (let i = 0; i < chars.length; i++) {
    if (vowels.test(chars[i]) && consonantUpTo == 0) {
      consonantUpTo = chars.indexOf(chars[i]);
      continue;
    }
  }

  for (let i = consonantUpTo; i < chars.length; i++) {
    toPrint.push(chars[i]);
  }

  for (let i = 0; i < consonantUpTo; i++) {
    toPrint.push(chars[i]);
  }

  return `${toPrint.join("")}ay`;
};

// Test
console.log(pigLatin("eight")); // eightway
console.log(pigLatin("glove")); // oveglay
