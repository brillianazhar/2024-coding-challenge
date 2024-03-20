// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/52f3149496de55aded000410

function sumDigits(number) {
  return number
    ? `${number}`
        .replace(/[-]/g, "")
        .split("")
        .reduce((a, b) => Number(a) + Number(b))
    : 0;
}

console.log(sumDigits(99));
