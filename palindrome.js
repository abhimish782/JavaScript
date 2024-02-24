/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function removeSpacesAndPunctuation(str) {
  // Remove spaces and punctuation using regular expressions
  return str.replace(/[^\w\s]|_/g, '').replace(/\s+/g, '');
}
function isPalindrome(str) {
  let str3=removeSpacesAndPunctuation(str);
  let str1=str3.toLowerCase();
  let str2=str1.split('').reverse().join('');
  return str1==str2;
}

module.exports = isPalindrome;
