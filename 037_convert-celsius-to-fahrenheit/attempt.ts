const convertCelsiusToFahrenheit = (celsius: number): number => {
    return (celsius * (9 / 5)) + 32
}

// Test
console.log(convertCelsiusToFahrenheit(-30)) // -22
console.log(convertCelsiusToFahrenheit(-10)) // 14
console.log(convertCelsiusToFahrenheit(0)) // 32