const candies = (children: number, candies: number): number => {
  const each = Math.floor(candies / children);

  return each * children
};

// Test
console.log(candies(3, 10)); // 9
