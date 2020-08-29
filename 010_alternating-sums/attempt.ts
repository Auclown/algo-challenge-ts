const alternatingSums = (a: number[]): number[] => {
  let teamOneSum: number = 0
  let teamTwoSum: number = 0;

  for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      teamOneSum += a[i];
    } else {
      teamTwoSum += a[i];
    }
  }

  return [teamOneSum, teamTwoSum];
};

// Test
console.log(alternatingSums([50, 60, 60, 45, 70])); // [180, 105]
