const makeArrayConsecutive = (statue: number[]): number => {
  statue = statue.sort();
  let result: number = 0;

  for (let i = 0; i < statue.length - 1; i++) {
    const diff: number = statue[i + 1] - statue[i];
    if (statue[i + 1] - statue[i] != 1) {
      result += (diff - 1);
    }
  }
  
  return result;
};

// Test
console.log(makeArrayConsecutive([6, 2, 3, 8])); // 3
