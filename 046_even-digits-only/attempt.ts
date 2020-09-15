const evenDigitsOnly = (s: number): boolean => {
  const toCheck: string[] = s.toString().split("");

  for (let i = 0; i < toCheck.length; i++) {
    if (parseInt(toCheck[i]) % 2 != 0) {
      return false;
    }
  }

  return true;
};

// Test
console.log(evenDigitsOnly(248622)); // true
console.log(evenDigitsOnly(642386)); // false
console.log(evenDigitsOnly(3)); // false
console.log(evenDigitsOnly(4466)); // true