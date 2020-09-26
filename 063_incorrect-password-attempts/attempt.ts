const incorrectPasswordAttempts = (
  passcode: string,
  attempts: string[]
): boolean => {
  let attempt = 0;
  for (let i = 0; i < attempts.length; i++) {
    if (attempt <= 10 && attempts[i] == passcode) {
      return true;
    }
  }

  return false;
};

// Test
console.log(
  incorrectPasswordAttempts("1111", [
    "1111",
    "4444",
    "9999",
    "3333",
    "8888",
    "2222",
    "7777",
    "0000",
    "6666",
    "7285",
    "5555",
    "1111",
  ])
); // true

console.log(incorrectPasswordAttempts("1111", ["3435"])); // false
