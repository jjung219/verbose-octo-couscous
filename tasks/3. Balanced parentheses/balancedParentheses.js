export function areParenthesesBalanced(inputString) {
  // TODO: write your code here
  const paren = [];

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === '(') {
      paren.push('(');
    }
    if (inputString[i] === ')') {
      if (paren.length === 0) return false;
      paren.pop();
    }
  }

  return paren.length === 0;
}