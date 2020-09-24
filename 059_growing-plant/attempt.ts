const growingPlant = (
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number
): number => {
  let plantHeight: number = 0;
  let dayCount: number = 0;
  while (plantHeight < desiredHeight) {
    dayCount++;
    plantHeight += upSpeed;

    if (plantHeight < desiredHeight) {
      plantHeight -= downSpeed;
    }
  }

  return dayCount;
};

// Test
console.log(growingPlant(100, 10, 910)); // 10
