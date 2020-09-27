const internalBackups = (
  lastBackupTime: number,
  changes: number[][]
): number[] => {
  let result = [];
  const lastBackupTimes = {};

  for (let i = 0; i < changes.length; i++) {
    lastBackupTimes[changes[i][1]] = changes[i][0];
  }

  const keys = Object.keys(lastBackupTimes);
  const times = Object.values(lastBackupTimes);

  for (let i = 0; i < times.length; i++) {
    if (times[i] > lastBackupTime) {
      result.push(keys[i]);
    }
  }

  return result;
};

// Test
console.log(
  internalBackups(461620205, [
    [461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1],
  ])
); // [1, 3, 5]
