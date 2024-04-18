// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
  return (
    [...`${value}`].reduce(
      (a, b) => a + Number(b) ** [...`${value}`].length,
      0
    ) === value
  );
}

console.log({ "": narcissistic(153) });
