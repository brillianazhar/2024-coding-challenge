// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/javascript

const binaryArrayToNumber = (arr) => {
  return parseInt(Number(arr.join("")), 2);
};

console.log(binaryArrayToNumber([1, 1, 1, 1]));
