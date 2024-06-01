// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/59c633e7dcc4053512000073

function solve(s) {
  //   return Math.max(
  //     ...s
  //       .replace(/[aeiou]/g, " ")
  //       .split(" ")
  //       .map((s) => [...s].reduce((a, b) => a + b.charCodeAt() - 96, 0))
  //   );

  //Cara lain
  return Math.max(
    ...s
      .split(/[aeiou]+/)
      .map((s) => [...s].reduce((a, b) => a + b.charCodeAt() - 96, 0))
  );
}

console.log({ "": solve("strength") });
