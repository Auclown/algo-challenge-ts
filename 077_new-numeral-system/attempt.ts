const newNumeralSystem = (s: string): string[] => {
  const result: string[] = [];
  let startCharCount: number = 65;
  let endCharCount: number = s.charCodeAt(0);

  while (startCharCount <= endCharCount) {
    const toPush = `${String.fromCharCode(
      startCharCount
    )} + ${String.fromCharCode(endCharCount)}`;
    result.push(toPush);
    startCharCount++;
    endCharCount--;
  }

  return result;
};
