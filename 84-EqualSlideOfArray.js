// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr) {
  return arr.findIndex(
    (_, i) =>
      arr.slice(0, i + 1).reduce((a, b) => a + b) ===
      arr.slice(i, arr.length + 1).reduce((a, b) => a + b)
  );
}

console.log({ "": findEvenIndex([1, 100, 50, -51, 1, 1]) });
