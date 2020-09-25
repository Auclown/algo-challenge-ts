const houseOfCats = (legs: number): number[] => {
  let cat: number = 0;
  let human: number = 0;

  if (legs == 2) {
    return [1];
  }

  // Count possible human
  for (let i = legs; i >= 0; i--) {
    if (i % 2 == 0 && i != 0) {
      human += 1;
    }
  }

  // Count possible cat
  for (let i = legs; i >= 0; i--) {
    if (i % 4 == 0 && i != 0) {
      cat += 1;
    }
  }

  return [cat, human];
};

// Test
console.log(houseOfCats(4)); // [1, 2];
console.log(houseOfCats(6)); // [1, 3];
console.log(houseOfCats(2)); // [1];
