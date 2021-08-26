export function isPalindrome(inputString) {
  // TODO: write your code here
  //return true if given string is a palindrome and false otherwise
  //palindrome - word that can be read the same backward as forward
  // madam , racecar
  // switch word to lowercase
  // reverse the original word, lowercased and compare
  const original = inputString.toLowerCase();
  const reversedString = original.split('').reverse().join('');
  return original === reversedString;
}