const arrayConversion = (a: number[]): number => {
  let result: number[] = [];
  let keepGoing: boolean = true;
  let iteration: number = 1;

  while (keepGoing) {
    for (let i = 0; i < a.length; i++) {
      if (iteration % 2 != 0) {
        if (i % 2 == 0) {
          result.push(a[i] + a[i + 1]);
        }
      }

      if (iteration % 2 == 0) {
      }

      iteration++;
    }
  }

  return result[0] + result[1];
};

// Test
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
