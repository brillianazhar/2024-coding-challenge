// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;
  return (
    array1
      .map((num) => num ** 2)
      .sort((a, b) => a - b)
      .join(" ") === array2.sort((a, b) => a - b).join(" ")
  );
}

console.log({
  "": comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  ),
});
