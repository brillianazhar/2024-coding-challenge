// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/55d5434f269c0c3f1b000058

function tripledouble(num1, num2) {
  let triple = `${num1}`.match(/([0-9])\1{2}/g) || [];
  let double = `${num2}`.match(/([0-9])\1{1}/g) || [];
  return triple.filter(
    (n) => double.filter((d) => d === n.slice(-2)).length > 0
  ).length
    ? 1
    : 0;
}

console.log({ "": tripledouble(1222345, 12345) });
console.log({ "": tripledouble(1222345999, 1234599) });
