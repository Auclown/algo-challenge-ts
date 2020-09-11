const convertString = (s: string, t: string): boolean => {
  let word = "";
  let tIndex = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == t[tIndex]) {
      word = word.concat(s[i]);
      tIndex++;

      if (word == t) {
        return true;
      }
    }
  }

  return false;
};

// Test
console.log(convertString("ceoydefthf5iyg5h5yts", "codefights")); // true
console.log(convertString("addbyca", "abcd")); // false
