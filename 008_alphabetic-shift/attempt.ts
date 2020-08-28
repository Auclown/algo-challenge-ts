const alphabeticShift = (s: string): string => {
  let result: string = "";

  for (let i = 0; i < s.length; i++) {
    let charToAdd = "";

    if (s[i] == "z") {
      charToAdd = "a";
    } else {
      charToAdd = String.fromCharCode(s.charCodeAt(i) + 1);
    }

    result += charToAdd;
  }

  return result;
};

// Test
console.log(alphabeticShift("crazy")); // "dsbaz"
console.log(alphabeticShift("deavc")); // "efbwd"
console.log(alphabeticShift("ddd")); // "eee"
