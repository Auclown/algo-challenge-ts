const containsDuplicates = (a: number[]): boolean => {
  a = a.sort();

  for (let i = 0; i < a.length; i++) {
    if (a[i] == a[i + 1]) {
      return true;
    }
  }

  return false;
};

// Test
console.log(containsDuplicates([1, 2, 3, 1])); // true
console.log(containsDuplicates([3, 1])); // false
console.log(containsDuplicates([1, 4, 6, 4, 2])); // true
