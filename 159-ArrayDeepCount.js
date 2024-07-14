// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/596f72bbe7cd7296d1000029

function deepCount(a) {
  //   let total = 0;
  //   function countNested(arr) {
  //     total += 1;
  //     return arr.map((a) => (typeof a === "object" ? countNested(a) : total++));
  //   }
  //   a.map((item) => (typeof item === "object" ? countNested(item) : total++));
  //   return total;

  // Cara lain
  return a.reduce(
    (a, b) => a + (Array.isArray(b) ? deepCount(b) : 0),
    a.length
  );
}

console.log({ "": deepCount(["x", "y", ["z"]]) });
