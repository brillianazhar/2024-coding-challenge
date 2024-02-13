// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s) {
  return s
    .split(" ")
    .map((n) => n.length)
    .sort((a, b) => a - b)[0];

  //Cara 2
  // return Math.min(...s.split(" ").map (s => s.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
