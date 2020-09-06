const checkPalindrome = (str: string): boolean => {
  const newStr = str.toLowerCase().split("").reverse().join("");

  return str == newStr;
};

console.log(checkPalindrome("dcvetty")); // fase
console.log(checkPalindrome("aabaa")); // true
console.log(checkPalindrome("abac")); // fase
console.log(checkPalindrome("a")); // true
