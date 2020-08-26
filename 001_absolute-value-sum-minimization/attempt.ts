function absoluteValueSumMinimization(a: number[]): number {
  const sorted = a.sort();
  let result: number;

  if (sorted.length % 2 == 0) {
    result = sorted[sorted.length / 2 - 1];
  } else {
    result = sorted[Math.floor(sorted.length / 2)];
  }

  return result;
}

// Test
let testCases: number[][] = [
  [2, 4, 7],
  [2, 4, 7, 6],
  [2, 4, 7, 6, 6],
  [2, 4, 7, 6, 6, 8],
];
for (let i = 0; i < testCases.length; i++) {
  console.log(
    `Test case ${i + 1} - [${
      testCases[i]
    }]:\nGot: ${absoluteValueSumMinimization(testCases[i])}`
  );
}
