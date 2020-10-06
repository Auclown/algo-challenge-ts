const sortByLength = (a: string[]): string[] => {
  return a.sort((e1, e2) => e1.length - e2.length);
};

// Test
console.log(sortByLength(["abc", "", "aaa", "a", "zz"])); // ["", "a", "zz", "abc", "aaa"]
