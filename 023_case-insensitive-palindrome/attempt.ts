const caseInsensitivePalindrome = (str: string): boolean => {
  str = str.toLowerCase();
  const temp = str.split("").reverse();
  const newStr = temp.join("");

  return str == newStr;
};

// Test
console.log(caseInsensitivePalindrome("efsgs")); // false
console.log(caseInsensitivePalindrome("aabaa")); // true
console.log(caseInsensitivePalindrome("aAbaA")); // true
console.log(caseInsensitivePalindrome("BbcCBb")); // true
console.log(caseInsensitivePalindrome("ddcvac")); // false