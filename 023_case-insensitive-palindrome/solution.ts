function solution(inputString: string): boolean {
  const orignalLowerCase = inputString.toLowerCase();
  const reversedWord = orignalLowerCase.split("").reverse().join("");

  return orignalLowerCase === reversedWord;
}
