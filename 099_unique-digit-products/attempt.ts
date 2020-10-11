const uniqueDigitProducts = (a: number[]): number => {
  const result: number[] = [];

  for (let i = 0; i < a.length; i++) {
    const _product = product(a[i]);
    if (!result.includes(_product)) {
      result.push(_product);
    }
  }

  return result.length;
};

const product = (n: number): number => {
  const digits: string[] = n.toString().split("");
  let result: number = 1;

  for (let digit of digits) {
    result *= parseInt(digit);
  }

  return result;
};

// Test
console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23])); // 3
// console.log("Testing product()", product(121)); 2
// console.log("Testing product()", product(24)); 8
