const sortByHeight = (a: number[]): number[] => {
  const newArray: number[] = a
    .filter((number) => {
      if (number != -1) {
        return number;
      }
    })
    .sort((num1, num2) => num1 - num2);

  let index: number = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] != -1) {
      a[i] = newArray[index];
      index++;
    }
  }

  return a;
};

// Test
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])); // [-1, 150, 160, 170, -1, -1, 180, 190]
