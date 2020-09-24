const houseNumberSum = (a: number[]): number => {
  let metZeroYet: boolean = true;
  let result: number = 0;
  let i: number = 0;

  while (metZeroYet) {
    if (a[i] == 0) {
      metZeroYet = false;
    } else {
      result += a[i];
      i++;
    }
  }
  
  return result;
};

// Test
console.log(houseNumberSum([5, 1, 2, 3, 0, 1, 5, 0, 2])); // 11
