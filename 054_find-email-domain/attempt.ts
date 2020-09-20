const findEmailDomain = (s: string): string => {
  const at: number = s.lastIndexOf("@");

  return s.slice(at + 1);
};

// Test
console.log(findEmailDomain("prettyandsimple@example.com")); // "example.com"
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org')); // "example.org"
