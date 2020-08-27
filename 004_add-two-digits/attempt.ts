function addTwoDigits(a: number): number {
  let result: number = 0;
  const converted = a.toString();
  const split = converted.split("");

  for (let i = 0; i < split.length; i++) {
    result += parseInt(split[i]);
  }

  return result;
}

// Test
console.log(addTwoDigits(29)); // 11
console.log(addTwoDigits(45)); // 9
console.log(addTwoDigits(99)); // 18
