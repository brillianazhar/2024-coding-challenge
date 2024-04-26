// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  return arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num))[0];
}

console.log({ "": findUniq([3, 10, 3, 3, 3]) });
