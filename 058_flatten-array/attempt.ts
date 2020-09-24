const flattenArray = (a: any[]): any[] => {
  let result: any[] = [];

  a.forEach((element) => {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element));
    } else {
      result.push(element);
    }
  });

  return result;
};

// Test
console.log(flattenArray([[["a"]], [["b"]]])); // [a, b];
console.log(flattenArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4];
