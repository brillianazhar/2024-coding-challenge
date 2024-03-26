// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(values) {
  //   return Number(
  //     values
  //       .filter((num, i) => values.findIndex((n) => n === num) === i)     // Cari nilai array yang sama
  //       .sort((a, b) => a - b)
  //       .join("")
  //   );

  // Cara lain
  return parseInt(
    Array.from(new Set(values))
      .sort((a, b) => a - b)
      .join("")
  );
}

console.log(minValue([4, 7, 5, 7]));
