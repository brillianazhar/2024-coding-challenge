// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

function rowWeights(array) {
  return [
    array.filter((_, i) => i % 2 !== 1).reduce((a, b) => a + b, 0),
    array.filter((_, i) => i % 2).reduce((a, b) => a + b, 0),
  ];
}

console.log({ "": rowWeights([10, 20, 30, 40]) });
