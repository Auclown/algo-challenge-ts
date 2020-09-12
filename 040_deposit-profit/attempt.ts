const depositProfit = (dpst: number, rt: number, thrsh: number): number => {
  let result: number = 0;

  while (dpst < thrsh) {
    dpst += dpst * (rt / 100);
    result += 1;
  }
  
  return result;
};

// Test
console.log(depositProfit(100, 20, 170)); // 3
