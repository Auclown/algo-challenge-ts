const encloseInBrackets = (s: string): string => {
  return `(${s})`;
};

// Test
console.log(encloseInBrackets("abacaba")); // "(abacaba)"
console.log(encloseInBrackets("dkickbi")); // "(dkickbi)"