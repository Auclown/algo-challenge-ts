const alternatingSums = (a: number[]): number[] => {
  let teamOne: number[] = [];
  let teamTwo: number[] = [];
  let result: number[] = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      teamOne.push(a[i]);
    } else {
      teamTwo.push(a[i]);
    }
  }

  for (let i = 0; i < teamOne.length; i++) {
    result[0] += teamOne[i];
  }

  for (let i = 0; i < teamTwo.length; i++) {
    result[1] += teamTwo[i];
  }

  return result;
};

// Test
console.log(alternatingSums([50, 60, 60, 45, 70])); // [180, 105]
