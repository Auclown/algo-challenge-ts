function aepSolution(inputArray: number[]): number {
  let largestProduct = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];

    largestProduct = largestProduct < product ? product : largestProduct;
  }

  return largestProduct;
}
