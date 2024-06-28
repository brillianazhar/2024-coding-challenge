// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5274d9d3ebc3030802000165

function nbrOfLaps(x, y) {
  for (let i = 1; i <= x * y; i++) {
    if (i % x === 0 && i % y === 0) return [i / x, i / y];
  }
}

console.log({ "": nbrOfLaps(4, 6) });
