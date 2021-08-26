export function getFibonacciUntil(n) {
  //TODO write your code here, remember it should be recursive
  //sum of the preceding two numbers becomes the next number in the array
  if (n <= 0) {
    return [];
  }
  if (n == 1) {
    return [0];
  }
  if (n == 2) {
    return [0, 1];
  }

  const arr = getFibonacciUntil(n - 1);
  const nextNumber = arr[arr.length - 1] + arr[arr.length - 2];
  return [...arr, nextNumber];
}
