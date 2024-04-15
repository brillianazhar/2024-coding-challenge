// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  return num <= 9
    ? 0
    : 1 + persistence(`${num}`.split("").reduce((a, b) => a * Number(b), 1));
}

console.log({ "": persistence(39) });
