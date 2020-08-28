function allLongestStrings(a: string[]): string[] {
  let result: string[] = [];
  let longest: number = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i].length > longest) {
      longest = a[i].length;
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i].length == longest) {
      result.push(a[i]);
    }
  }

  return result;
}

// Test
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])); // ['aba','vcd','aba']
console.log(allLongestStrings(["abada", "aa", "ad", "vcd", "abada"])); // ['abada','abada']
console.log(allLongestStrings(["abadadada", "aa", "ad", "vcd", "abada"])); // ['abadadada']
console.log(allLongestStrings(["a", "aa", "ad", "v", "b"])); // ['aa','ad']
