function solution(inputArray: number[]): number {
  let isOdd = true;

  while (inputArray.length !== 1) {
    inputArray = sumProduct(inputArray, isOdd);
    isOdd = !isOdd;
  }

  return inputArray[0];
}

// Gives an error for me but he said it is working...?
function sumProduct(nums: number[], isOdd: boolean): number[] {
  const sumProducts: number[] = [];

  if (isOdd) {
    for (let i = 0; i < nums.length; i += 2) {
      sumProducts.push(nums[i] + nums[i + 1]);
    }
  } else {
    for (let i = 0; i < nums.length; i += 2) {
      sumProducts.push(nums[i] * nums[i + 1]);
    }
  }

  return sumProducts;
}
