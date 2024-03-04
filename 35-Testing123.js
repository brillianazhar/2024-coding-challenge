// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

var number = function (array) {
  return array.length === 0 ? [] : array.map((char, i) => `${i + 1}: ${char}`);
};

console.log(number(["a", "b", "c"]));
