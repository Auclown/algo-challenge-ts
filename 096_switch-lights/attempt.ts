const switchLights = (a: number[]): number[] => {
  for (let i = 1; i <= a.length; i++) {
    if (a[i] == 1) {
      for (let j = 0; j < i; j++) {
        a[j] = a[j] ? 0 : 1;
      }
    }
  }

  return a;
};

// Test
console.log(switchLights([1, 1, 1, 1, 1])); // [0, 1, 0, 1, 0]
console.log(switchLights([0, 0])); // [0, 0]
