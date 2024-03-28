// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

function sumOfMinimums(arr) {
  //   return arr.map((a) => a.sort((a, b) => a - b)[0]).reduce((a, b) => a + b);

  // Cara lain
  return arr.reduce((a, b) => a + Math.min(...b), 0);
}

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
);
