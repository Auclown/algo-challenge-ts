const chunkyMonkey = (a: any[], n: number): any[][] => {
  let result: any[][] = [];
  let firstPart: any[] = [];
  let secondPart: any[] = [];
  let i = 0;

  while (i < a.length) {
    if (i < n) {
      firstPart.push(a[i]);
    } else {
      secondPart.push(a[i]);
    }
    i++;
  }

  result.push(firstPart);
  result.push(secondPart);

  return result;
};

// Test
console.log(chunkyMonkey(["a", "b", "c", "d"], 2)); // [["a", "b"], ["c", "d"]]
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4)); // [[0, 1, 2, 3], [4, 5]]
