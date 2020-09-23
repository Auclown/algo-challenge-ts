// TODO: Fix Maximum call stack size exceeded error!
const flattenArray = (a): any[] => {
  let result: any[] = [];

  if (
    a.every((element) => {
      !Array.isArray(element);
    })
  ) {
    return a;
  }

  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      result.push(a[i][0]);
    } else {
      result.push(a[i]);
    }
  }

  return flattenArray(result);
};

// Test
console.log(flattenArray([[["a"]], [["b"]]])); // [a, b];
console.log(flattenArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4];
