const differentSymbolsNaive = (s: string): number => {
  let result: string[] = [];
  const split: string[] = s.split("");

  for (let i = 0; i < split.length; i++) {
    if (!result.includes(split[i])) {
      result.push(split[i]);
    }
  }

  return result.length;
};

// My asnwer works but is poorly optimized.
// Could use Set that ignores duplicated value automatically.

// Test
console.log(differentSymbolsNaive("cabca")); // 3
