const electionWinners = (votes: number[], k: number): number => {
  // Sort votes array in descending order
  const voteSort = votes.sort((a, b) => b - a);
  const initMaxCandidate: number = Math.max(...votes);
  let possibleWinner: number = 0;

  if (voteSort[0] == voteSort[1] && k == 0) {
    return 1;
  }

  for (let i = 0; i < voteSort.length; i++) {
    if (initMaxCandidate - voteSort[i] < k) {
      possibleWinner += 1;
    }
  }

  return possibleWinner;
};

// Test
console.log(electionWinners([2, 3, 5, 2], 3)); // 2
