export function Reduce(array, reducer, initialValue) {
  // TODO: write your code here
  //reducer - fn that reduces the array to a single value
  let result = initialValue;
  for (let i = 0; i < array.length; i++) {
    result = reducer(result, array[i]);
  }
  return result;
}
