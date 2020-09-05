function solution(symbol: string): string {
  const result = parseInt(symbol);

  return isNaN(result) ? "not a digit" : result % 2 === 0 ? "even" : "odd";
}
