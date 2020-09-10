const confirmEnding = (str: string, ending: string): boolean => {
  const len = -1 * ending.length;
  
  return str.substr(len) == ending;
};

// Test
console.log(confirmEnding("Abstraction", "action")); // true
console.log(confirmEnding("Open sesame", "pen")); // false
