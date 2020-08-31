const arrayConversion = (a: number[]): number => {
  let isEven = true;

  while (a.length > 1) {
    let temp = [];

    for (let i = 0; i < a.length; i += 2) {
      if (isEven) {
        temp.push(a[i] + a[i + 1]);
      } else {
        temp.push(a[i] * a[i + 1]);
      }
    }
    
    a = temp;
    isEven = !isEven;
  }
  return a[0];
};

// Test
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
