function add1(param1: number, param2: number): number {
  return param1 + param2;
}

function add2(...param1: number[]): number {
  let total = 0;

  param1.forEach((num) => {
    total += num;
  });

  return total;
}
