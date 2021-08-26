export function getFizzBuzzUntil(n) {
  // TODO: write your code here
  //starting from 1
  // 3x 'Fizz'
  // 5x 'Buzz'
  // 3x && 5x /15x 'FizzBuzz'
  const result = [];
  for (let i = 1; i <= n; i++) {
    let word = '';
    if (i % 3 === 0 && i % 5 === 0) {
      word = 'FizzBuzz';
    } else if (i % 3 === 0) {
      word = 'Fizz';
    } else if (i % 5 === 0) {
      word = 'Buzz';
    } else {
      word = i;
    }
    result.push(word);
  }
  return result;
}
