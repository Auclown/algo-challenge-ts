const fancyRide = (miles: number, fares: number[]): string => {
  const maximum: number = 20;
  const uberOptions = [
    "Uber X",
    "Uber XL",
    "Uber Plus",
    "Uber Black",
    "Uber SUV",
  ];
  //   const rideOptions = {};

  //   for (let i = 0; i < fares.length; i++) {
  //     rideOptions[uberOptions[i]] = fares[i] * miles;
  //   }

  //   const affordableMax = Math.max(
  //     ...Object.values(rideOptions).filter((option) => option < maximum)
  //   );

  //   return Object.keys(rideOptions).find(
  //     (key) => rideOptions[key] == affordableMax
  //   );
  for (let i = fares.length - 1; i >= 0; i--) {
    if (fares[i] * miles <= maximum) {
      return uberOptions[i];
    }
  }
};

// Test
console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3])); // "Uber XL"
