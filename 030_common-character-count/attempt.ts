const commonCharacterCount = (s1: string, s2: string): number => {
  const charCountS1 = {};
  let charsInCommon = 0;

  s1.split("").forEach((char) => {
    if (!charCountS1[char]) {
      charCountS1[char] = 1;
    } else {
      charCountS1[char]++;
    }
  });

  s2.split("").forEach((char) => {
    if (charCountS1[char]) {
      charCountS1[char]--;
      charsInCommon++;
    }
  });

  return charsInCommon;
};
