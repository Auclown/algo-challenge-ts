const palindromRearranging = (s: string): boolean => {
  const chars: string[] = s.split("");
  const charCount = {};
  let oddCount: number = 0;

  for (let i = 0; i < chars.length; i++) {
    if (charCount.hasOwnProperty(chars[i])) {
      charCount[chars[i]]++;
    } else {
      charCount[chars[i]] = 1;
    }
  }

  for (let key in charCount) {
    if (charCount[key] % 2 != 0) {
      oddCount++;
    }
  }

  return oddCount > 1 ? false : true;
};

// Test
console.log(palindromRearranging("aabb")); // true
