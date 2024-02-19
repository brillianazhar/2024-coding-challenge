// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum(a, b) {
  return Array((a > b ? a - b : b - a) + 1)
    .fill()
    .map((_, i) => (a < b ? i + a : i + b))
    .reduce((a, b) => a + b);
}

console.log(getSum(0, -1));
