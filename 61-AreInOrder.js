// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/56b7f2f3f18876033f000307

function inAscOrder(arr) {
  return arr.filter((num, i) => num > arr[i + 1]).length ? false : true;
}

console.log({ tes: inAscOrder([1, 6, 10, 18, 2, 4, 20]) });
