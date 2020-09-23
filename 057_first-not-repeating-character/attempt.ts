const firstNotRepeatingCharacter = (s: string): string => {
  const charsObj: object = {};

  for (let i = 0; i < s.length; i++) {
    if (!charsObj.hasOwnProperty(s[i])) {
      charsObj[s[i]] = { count: 1 };
    } else {
      charsObj[s[i]].count += 1;
    }
  }

  for (const key in charsObj) {
    if (charsObj[key].count <= 1) {
      return key;
    }
  }
  return "_";
};

// Test
console.log(firstNotRepeatingCharacter("abacabad")); // c
console.log(firstNotRepeatingCharacter("abacabaabacaba")); // _
