export function encryptCaesar(inputString, key) {
  // TODO: write your code here
  let result = "";
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < inputString.length; i++) {
    const letterIndex = alphabets.indexOf(inputString[i]);
    let encodedLetterIndex = letterIndex + key;
    if (encodedLetterIndex >= 25) encodedLetterIndex -= 26;
    result += alphabets[encodedLetterIndex];
  }
  return result;
}
