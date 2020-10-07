const stringsConstruction = (a: string, b: string): number => {
  const aCount: object = getAlphabetCount(a);
  const bCount: object = getAlphabetCount(b);
  const counts: number[] = [];

  for (let char in aCount) {
    if (bCount.hasOwnProperty(char)) {
      counts.push(Math.floor(bCount[char] / aCount[char]));
    } else {
      return 0;
    }
  }
  return Math.min(...counts);
};

const getAlphabetCount = (word: string): object => {
  const chars: string[] = word.split("");
  const alphabetCount: object = {};

  chars.forEach((char) => {
    if (alphabetCount.hasOwnProperty(char)) {
      alphabetCount[char]++;
    } else {
      alphabetCount[char] = 1;
    }
  });

  return alphabetCount;
};

// Test
console.log(stringsConstruction("abc", "abccba")); // 2
