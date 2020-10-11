const validTime = (time: string): boolean => {
  const splitTime: string[] = time.split(":");
  const hour: number = parseInt(splitTime[0]);
  const mins: number = parseInt(splitTime[1]);

  if (0 <= hour && hour <= 24 && 0 <= mins && mins <= 60) {
    return true;
  }

  return false;
};

// Test
console.log(validTime("13:58")); // true
console.log(validTime("25:51")); // false
console.log(validTime("02:76")); // false
