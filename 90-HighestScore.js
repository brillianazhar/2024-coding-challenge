// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x) {
  const score = x
    .toLowerCase()
    .split(" ")
    .map((word) => [...word].reduce((a, b) => a + b.charCodeAt() - 96, 0));
  return x.split(" ")[score.indexOf(Math.max(...score))];
}

console.log({ "": high("what time are we climbing up the volcano") });
