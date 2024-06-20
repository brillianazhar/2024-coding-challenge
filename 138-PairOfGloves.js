// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/58235a167a8cb37e1a0000db

function numberOfPairs(gloves) {
  return [...new Set(gloves)]
    .map((glove) => Math.floor(gloves.filter((g) => g === glove).length / 2))
    .reduce((a, b) => a + b, 0);
}

console.log({
  "": numberOfPairs(["red", "green", "red", "blue", "blue", "red"]),
});
