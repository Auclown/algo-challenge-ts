const arrayChange = (a: number[]): number => {
  let count: number = 0;
  let keepGoing = true;

  // Keep looping until the input array is sorted
  while (keepGoing) {

    for (let i = 0; i < a.length - 1; i++) {
      console.log(`============== Iteration: ${i} ==============`);
      console.log(`============ Current count: ${count} ============`);

      // Check if next element is smaller than the current one
      // If so, add 1 to it and add 1 to count too.
      if (a[i + 1] <= a[i]) {
        a[i + 1] += 1;
        count++;
      }

      // Sort the current array to see if it is sorted.
      // If sorted, break the while loop.
      let sorted: number[] = a.sort();
      if (a === sorted) {
        keepGoing = false;
      }
    }
  }

  return count;
};

// Test
console.log(arrayChange([1, 1, 1])); // 3
