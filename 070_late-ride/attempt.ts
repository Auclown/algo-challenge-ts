const lateRide = (n: number): number => {
  const calcHour: number = Math.floor(n / 60);
  const calcMins: number = n % 60;
  const hours: string = calcHour < 10 ? `0${calcHour}` : `${calcHour}`;
  const minutes: string = calcMins < 10 ? `0${calcMins}` : `${calcMins}`;

  const timeStr: string = `${hours}${minutes}`;
  let result: number = 0;

  for (let i = 0; i < timeStr.length; i++) {
    result += parseInt(timeStr[i]);
  }

  return result;
};

// Test
console.log(lateRide(240)); // 4
console.log(lateRide(808)); // 14
