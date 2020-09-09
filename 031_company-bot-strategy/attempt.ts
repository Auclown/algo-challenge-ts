const companyBotStrategy = (trainingData: number[][]): number => {
  let numOfTrainers: number = 0;
  let totalSolvedTime: number = 0;

  for (let i = 0; i < trainingData.length; i++) {
    if (trainingData[i][1] == 1) {
      numOfTrainers += 1;
      totalSolvedTime += trainingData[i][0];
    }
  }
  return totalSolvedTime / numOfTrainers;
};

// Test
console.log(
  companyBotStrategy([
    [3, 1],
    [6, 1],
    [4, 1],
    [5, 1],
  ])
); // 4.5

console.log(
  companyBotStrategy([
    [4, 1],
    [4, -1],
    [0, 0],
    [6, 1],
  ])
); // 5.0
