const tasksTypes = (deadlines: number[], day: number): number[] => {
  let today: number = 0;
  let upcoming: number = 0;
  let later: number = 0;

  for (let i = 0; i < deadlines.length; i++) {
    if (deadlines[i] <= day) {
      today++;
    } else if (day + 1 <= deadlines[i] && deadlines[i] <= day + 7) {
      upcoming++;
    } else {
      later++;
    }
  }

  return [today, upcoming, later];
};

// Test
console.log(tasksTypes([1, 2, 3, 4, 5], 2)); // [2, 3, 0]
