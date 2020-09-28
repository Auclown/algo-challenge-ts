const isTandemRepeat = (s: string): boolean => {
  if (s.length % 2 != 0) {
    return false;
  }

  const half: number = s.length / 2;
  const firstHalf: string = s.slice(0, half);
  const secondHalf: string = s.slice(-1 * half);

  return firstHalf == secondHalf;
};

// Test
console.log(isTandemRepeat("tandemtandem")); // true
console.log(isTandemRepeat("qqq")); // false
console.log(isTandemRepeat("2w2ww")); // false
