export function areParenthesesBalanced(inputString) {
  // TODO: write your code here
  if (inputString[0] === ')') return false;
  if (inputString[0] === '(' && inputString.length > 2 && inputString[1] === ')') return false;
  if (inputString[inputString.length - 1] === '(') return false;

  let noOfLeft = 0;
  let noOfRight = 0;
  for (let i = 1; i < inputString.length - 1; i++) {
    if (inputString[i] === '(') noOfLeft++;
    if (inputString[i] === ')') noOfRight++;
  }

  return noOfLeft === noOfRight;
}