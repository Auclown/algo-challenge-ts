const reverseAString = (s: string): string => {
  let chars: string[] = s.split("");
  chars = chars.reverse();

  return chars.join("");
};

// Test
console.log(reverseAString("hello")); // olleh
console.log(reverseAString("Howdy")); // ydwoH
