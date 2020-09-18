const fareEstimator = (
  rideTime: number,
  rideDist: number,
  cpmin: number[],
  cpmil: number[]
): number[] => {
  let result: number[] = [];

  for (let i = 0; i < cpmin.length; i++) {
    result.push(rideTime * cpmin[i] + rideDist * cpmil[i]);
  }

  return result;
};

// Test
console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5])); // [13.7, 23.1, 28.1, 38]
