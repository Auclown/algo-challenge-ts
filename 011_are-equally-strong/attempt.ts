const areEquallyStrong = (
  aL: number,
  aR: number,
  bL: number,
  bR: number
): boolean => {
  const aMax = Math.max(aL, aR);
  const aMin = Math.min(aL, aR);
  const bMax = Math.max(bL, bR);
  const bMin = Math.min(bL, bR);

  return aMax == bMax && aMin == bMin;
};

console.log(areEquallyStrong(10, 15, 15, 10)); // true
console.log(areEquallyStrong(15, 10, 15, 10)); // true
console.log(areEquallyStrong(15, 10, 15, 9)); // false
