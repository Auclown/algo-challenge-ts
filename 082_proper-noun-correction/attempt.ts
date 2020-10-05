const properNounCorrection = (s: string): string => {
  s = s.toLowerCase();
  return s[0].toUpperCase() + s.slice(1, s.length);
};

console.log(properNounCorrection("pARiS")); // Paris
console.log(properNounCorrection("John")); // John
