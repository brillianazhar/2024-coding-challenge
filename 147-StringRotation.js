// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5596f6e9529e9ab6fb000014

function shiftedDiff(first, second) {
  return first.length == second.length ? (second + second).indexOf(first) : -1;
}

console.log({ "": shiftedDiff("eecoff", "coffee") });
