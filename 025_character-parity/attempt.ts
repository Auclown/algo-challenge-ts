const characterParity = (c: string): string => {
  switch (parseInt(c) % 2) {
    case 0:
      return "even";
    case 1:
      return "odd";
    default:
      return "not a digit";
  }
};

console.log(characterParity("24")); // even
console.log(characterParity("128")); // even
console.log(characterParity("23")); // odd
console.log(characterParity("387")); // odd
console.log(characterParity("s")); // not a digit
