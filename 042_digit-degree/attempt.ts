const digitDegree = (n: number, c: number = 0): number => {
  let count: number = c;
  const s: string[] = n.toString().split("");
  let temp: number = 0;

  if (s.length <= 1) {
    return count;
  }

  for (let i = 0; i < s.length; i++) {
    temp += parseInt(s[i]);
  }
  count++;

  return digitDegree(temp, count);
};

// Test
console.log(digitDegree(5)); // 0
console.log(digitDegree(100)); // 1
console.log(digitDegree(91)); // 2
