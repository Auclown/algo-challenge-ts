const ratingThreshold = (threshold: number, ratings: number[][]): number => {
  const averages: number[] = [];
  let result: number = 0;

  for (let i = 0; i < ratings.length; i++) {
    let total: number = 0;
    for (let j = 0; j < ratings[i].length; j++) {
      total += ratings[i][j];
    }
    averages.push(total / ratings[i].length);
  }

  for (let i = 0; i < averages.length; i++) {
    if (averages[i] < threshold) {
      result++;
    }
  }

  return result;
};

// Test
console.log(ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [4]])); // [1]
