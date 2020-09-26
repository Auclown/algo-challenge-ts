const integerToStringOfFixedWidth = (n: number, width: number): string => {
  const nS: string = n.toString().slice(-1 * width);
  let zeros: string = "";

  if (width > nS.length) {
    const diff: number = width - nS.length;
    for (let i = 0; i < diff; i++) {
      zeros += "0";
    }
  }

  return zeros + nS;
};

// Test
console.log(integerToStringOfFixedWidth(1234, 2)); // 34
console.log(integerToStringOfFixedWidth(1234, 4)); // 1234
console.log(integerToStringOfFixedWidth(1234, 5)); // 01234
