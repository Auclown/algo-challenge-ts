const launchSequenceChecker = (
  systemNames: string[],
  stepNumbers: number[]
): boolean => {
  const codes = {};

  for (let i = 0; i < systemNames.length; i++) {
    if (codes.hasOwnProperty(systemNames[i])) {
      if (codes[systemNames[i]] >= stepNumbers[i]) {
        return false;
      }
      codes[systemNames[i]] = stepNumbers[i];
    } else {
      codes[systemNames[i]] = stepNumbers[i];
    }
  }

  return true;
};

// Test
console.log(
  launchSequenceChecker(
    ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"],
    [1, 10, 11, 2, 12, 111]
  )
); // true

console.log(
  launchSequenceChecker(
    ["stage_1", "stage_1", "stage_2", "dragon"],
    [2, 1, 12, 111]
  ) // false
);
