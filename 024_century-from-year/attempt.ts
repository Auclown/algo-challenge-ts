const centuryFromYear = (year: number): number => {
  return Math.ceil(year / 100);
};

// Test
console.log(centuryFromYear(1905)); // 20
console.log(centuryFromYear(1700)); // 17
console.log(centuryFromYear(1600)); // 16
console.log(centuryFromYear(1701)); // 18
console.log(centuryFromYear(2000)); // 20
