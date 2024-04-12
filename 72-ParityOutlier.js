// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers) {
  const even = integers.filter((int) => int % 2 === 0);
  const odd = integers.filter((int) => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

console.log({
  "": findOutlier([
    24392222, -99297305, -20058550, -165651220, 164038780, 83727850, 149343086,
    -197320300, -79692670, 164309580,
  ]),
});
