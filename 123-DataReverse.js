// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/569d488d61b812a0f7000015

function dataReverse(data) {
  return Array.from({ length: data.length / 8 }, (_, i) =>
    data.slice(i * 8, i * 8 + 8)
  )
    .reverse()
    .flat();
}

console.log({
  "": dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ]),
});
