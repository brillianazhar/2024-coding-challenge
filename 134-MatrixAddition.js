// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/526233aefd4764272800036f

function matrixAddition(a, b) {
  return Array.from({ length: a.length }, (_, i) => {
    return Array.from({ length: a[0].length }, (_, j) => {
      return a[i][j] + b[i][j];
    });
  });
}

console.log({
  "": matrixAddition(
    [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1],
    ],
    [
      [2, 2, 1],
      [3, 2, 3],
      [1, 1, 3],
    ]
  ),
});
