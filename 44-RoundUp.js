// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/55d1d6d5955ec6365400006d

function roundToNext5(n) {
  // return n === 0 ? 0 : n % 5 === 0 ? n : (Math.floor(n / 5) + 1) * 5;

  // Cara lain
  return Math.ceil(n / 5) * 5;
}

console.log(roundToNext5(21));
