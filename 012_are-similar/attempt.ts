const areSimilar = (a: any[], b: any[]): boolean => {
  if (a.toString() === b.toString()) {
    return true;
  }

  const differences: number[] = [];
  let toCompare: number[] = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      differences.push(a[i]);
      toCompare.push(b[i]);
    }
  }

  toCompare = toCompare.reverse();

  if (differences.length === 2 && (differences.toString() == toCompare.toString())) {
    return true;
  }

  return false;
};

// Test
console.log(areSimilar([1, 2, 3], [1, 2, 3])); // true
console.log(areSimilar([1, 2, 3], [2, 1, 3])); // true
console.log(areSimilar([1, 2, 2], [2, 1, 1])); // false
